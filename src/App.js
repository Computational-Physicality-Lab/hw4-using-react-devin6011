import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import { useState } from 'react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      <Outlet context={[cartItems, setCartItems]} />
      <Footer />
    </>
  );
}
