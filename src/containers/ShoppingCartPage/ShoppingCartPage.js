import './ShoppingCartPage.css';
import shirts from '../../shared/shirts.js';
import { Link, useOutletContext } from 'react-router-dom';
import { Button, Input } from 'reactstrap';

function CartListItem({item, changeQuantity, removeItem}) {
  const shirt = shirts[item.productId];
  const shirtImage = shirt.colors[item.color].front;

  return (
    <section className='ShoppingCartListItem'>
      <h4>{shirt.name || 'Name not found'}</h4>
      <div className='FlexContainer' style={{justifyContent: 'flex-start'}}>
        <Link to={'../details/' + item.productId}>
          <img alt='Shirt Image' src={shirtImage} />
        </Link>
        <section>
          <div>
            Quantity:
            <Input type='select' onChange={(e) => changeQuantity(parseInt(e.target.value))}>
              {[...Array(20).keys()].map(num => (
                num + 1 === item.quantity ?
                  <option key={num} selected>
                    {num + 1}
                  </option>
                :
                  <option key={num}>
                    {num + 1}
                  </option>
              ))}
            </Input>
          </div>
          <div>Color: <output>{item.color.charAt(0).toUpperCase() + item.color.slice(1)}</output></div>
          <div>Size: <output>{item.size}</output></div>
          <div>Price (each): <output>{shirt.price || 'N/A'}</output></div>
          <Button onClick={removeItem}>Remove</Button>
        </section>
      </div>
    </section>
  );
}

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useOutletContext();
  
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartItemSubtotal = cartItems.reduce((sum, item) => sum + parseFloat(shirts[item.productId].price.slice(1)) * item.quantity, 0.0);
  const shippingFee = cartItemSubtotal > 0 ? 6.95 : 0;

  const changeQuantity = cartItemsIndex => newQuantity => {
    const newItem = Object.assign({}, cartItems[cartItemsIndex], {quantity: newQuantity});
    console.log(cartItems);
    setCartItems(Object.assign([], cartItems, {[cartItemsIndex]: newItem}));
  };

  const removeItem = cartItemsIndex => () => {
    const newCartItems = cartItems.slice();
    newCartItems.splice(cartItemsIndex, 1);
    setCartItems(newCartItems);
  };

  return (
    <main id='ShoppingCartMain'>
      <h2>My Cart ({cartItemCount})</h2>
      <div className='FlexContainer'>
        <section id='ShoppingCartList'>
          {cartItemCount == 0 ?
            <h3>Your Cart is Empty</h3>
            :
            cartItems.map((item, index) => (
              <CartListItem item={item} changeQuantity={changeQuantity(index)} removeItem={removeItem(index)}/>
            )).reverse()
          }
        </section>
        <aside id='ShoppingCartAside'>
          <section>
            <h4>Order Summary</h4>
            <div className='FlexContainer'>
              Subtotal: <output>${cartItemSubtotal.toFixed(2)}</output>
            </div>
            <div className='FlexContainer'>
              Est. Shipping: <output>${shippingFee.toFixed(2)}</output>
            </div>
            <div className='FlexContainer' style={{fontSize: '1.25em'}}>
              Total: <output style={{borderTop: '2px solid #c51230'}}>${(cartItemSubtotal + shippingFee).toFixed(2)}</output>
            </div>
            <div className='FlexContainer' style={{justifyContent: 'center'}}>
              <Link to='../not_implemented'>
                <Button>Sign in and Checkout</Button>
              </Link>
            </div>
          </section>
          <Link to='../products'>
            <Button>Continue Shopping</Button>
          </Link>
        </aside>
      </div>
    </main>
  );
}
