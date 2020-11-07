import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingAdmin from './components/ShoppingAdmin';
import { Allproducts } from './components/client/AllProducts';

function App() {
  return (
    <div>
      {/* <ShoppingAdmin/> */}
      <Allproducts/>
    </div>
  );
}
// npm i node-sass
export default App;
