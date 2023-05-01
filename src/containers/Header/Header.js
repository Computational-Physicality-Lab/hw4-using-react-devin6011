import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/images/logo.png';
import CartImage from '../../assets/images/cart.png';

export default function Header({cartItemCount}) {
  return (
    <>
      <header>
        <Link to=''>
          <img src={Logo} width='250' alt='Logo' />
        </Link>
        <h1>
          Scotty Shirts U Illustrate (SSUI)
        </h1>
        <Link to='shoppingcart' id='ShoppingCart'>
          <img src={CartImage} width='80' alt='Shopping Cart' />
          {cartItemCount}
        </Link>
      </header>
      <nav>
        <Link to='products'>T-SHIRTS</Link>
        <Link to='not_implemented'>CREATE FROM PICTURE</Link>
        <Link to='not_implemented'>CREATE YOUR OWN</Link>
        <Link to='not_implemented'>ABOUT US</Link>
        <Link to='not_implemented'>LOG IN</Link>
      </nav>
    </>
  );
}
