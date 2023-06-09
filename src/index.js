import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './ErrorPage';
import NotImplementedPage from './containers/NotImplementedPage/NotImplementedPage';
import HomePage from './containers/HomePage/HomePage';
import ProductsPage from './containers/ProductsPage/ProductsPage';
import DetailsPage from './containers/DetailsPage/DetailsPage';
import ShoppingCartPage from './containers/ShoppingCartPage/ShoppingCartPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'not_implemented',
        element: <NotImplementedPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'details/:productId',
        element: <DetailsPage />,
      },
      {
        path: 'shoppingcart',
        element: <ShoppingCartPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
