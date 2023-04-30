import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
