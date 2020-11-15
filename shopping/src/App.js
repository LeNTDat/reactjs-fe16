import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingAdmin from './components/admin/ShoppingAdmin';
import { Allproducts } from './components/client/AllProducts';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/admin/Login';
import Productdetail from './components/client/ProductDetail';

function App() {
  
  return (
    <Router>
       <div>
         {/* SWITCH LOCATION.PATHNAME
          CASE ADMIN: ADMIN
          CASE PRODUCT: PRODUCT
          
         */}
        {/* ADMIN  localhost:3000/admin */}
        <Switch>
          <Route path="/admin/login">
              <Login/>
          </Route>
          <Route path="/admin">
              <ShoppingAdmin/>
          </Route>
          {/* <Route path={componentConst.route} component={Productdetail} /> */}
         <Route path="/products/:id">
          <Productdetail/>
         </Route>

          <Route path="/products" >
            <Allproducts/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
// npm i node-sass
export default App;
