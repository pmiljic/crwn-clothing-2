import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import CartProvider from './providers/cart/cart.provider.jsx';
import UserProvider from './providers/user/user.provider';

import './index.css';
import App from './App';

ReactDOM.render(
  <CartProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </CartProvider>,
  document.getElementById('root')
);
