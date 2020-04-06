import React from 'react';
import './App.css';
import ProductDetail from './product/ProductDetail';
import { ShoppingProvider } from './contexts/ShoppingContext';
import ShoppingCart from './cart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <ShoppingProvider>
        <ShoppingCart></ShoppingCart>


        <ProductDetail productId={123456}></ProductDetail>
        <ProductDetail productId={123459}></ProductDetail>
      </ShoppingProvider>
    </div>
  );
}

export default App;
