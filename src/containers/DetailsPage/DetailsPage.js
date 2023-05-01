import './DetailsPage.css';
import shirts from '../../shared/shirts.js';
import { useParams } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import { Link, useOutletContext } from 'react-router-dom';
import { useState } from 'react';

const sizeArray = [
  'Size:',
  'Women’s XS',
  'Women’s S',
  'Women’s M',
  'Women’s L',
  'Women’s XL',
  'Women’s 2XL',
  'Men’s XS',
  'Men’s S',
  'Men’s M',
  'Men’s L',
  'Men’s XL',
  'Men’s 2XL',
];

export default function DetailsPage() {
  const { productId } = useParams();
  const shirt = shirts[productId];

  const [cartItems, setCartItems] = useOutletContext();

  const [color, setColor] = useState(() => shirt && shirt.colors ? Object.keys(shirt.colors)[0] : undefined);
  const [side, setSide] = useState('front');
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Size:');

  const colorCount = shirt && shirt.colors ? Object.keys(shirt.colors).length : 0;

  const getImageSrc = () => {
    if(!color || !(shirt.colors[color]) || !(shirt.colors[color][side])) {
      return shirt.default[side];
    }
    else {
      return shirt.colors[color][side];
    }
  };

  const addCartItems = () => {
    setCartItems([...cartItems, {productId, color, quantity, size}]);
  };

  if(!shirt) {
    return (
      <main id='DetailsMain'>
        <h2>Invalid shirt index.</h2>
      </main>
    );
  }

  return (
    <main id='DetailsMain'>
      <h2>{shirt.name || 'Name not found'}</h2>
      <section id='DetailSection'>
        <img alt='Shirt' src={getImageSrc()} />
        <section id='DetailDescription'>
          <h3>{shirt.price || 'No price available'}</h3>
          <p>{shirt.description || 'No description available'}</p>
          <div className='FlexContainer'>
            Side:
            <Button onClick={() => setSide('front')}>Front</Button>
            <Button onClick={() => setSide('back')}>Back</Button>
          </div>
          <div className='FlexContainer'>
            Color: { colorCount ?
              Object.keys(shirt.colors).map(shirtColor => (
                <Button style={{backgroundColor: shirtColor}} className='ColorButton' key={shirtColor} onClick={() => setColor(shirtColor)}>
                  {shirtColor.charAt(0).toUpperCase() + shirtColor.slice(1)}
                </Button>
              ))
              :
              <>N/A</>
            }
          </div>
          <div>
            Quantity:
            <Input type='select' onChange={(e) => setQuantity(parseInt(e.target.value))}>
              {[...Array(20).keys()].map(num => (
                <option key={num}>
                  {num + 1}
                </option>
              ))}
            </Input>
          </div>
          <div>
            Size:
            <Input type='select' onChange={(e) => setSize(e.target.value)}>
              {sizeArray.map(size => (
                <option key={size}>
                  {size}
                </option>
              ))}
            </Input>
          </div>
          
          {size === 'Size:' || !shirt.price ? 
            <Link to='../shoppingcart' style={{pointerEvents: 'none'}}>
              <Button disabled>
                Add To Cart
              </Button>
            </Link>
            :
            <Link to='../shoppingcart'>
              <Button onClick={addCartItems}>
                Add To Cart
              </Button>
            </Link>
          }
        </section>
      </section>
    </main>
  );
}
