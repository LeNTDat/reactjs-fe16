import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingAdmin from './components/admin/ShoppingAdmin';
import { Allproducts } from './components/client/AllProducts';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/admin/Login';
import Productdetail from './components/client/ProductDetail';
import Home from './components/client/Home';
import Cart from './components/client/Cart';
import Navbarclient from './components/client/NavbarClient';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

function App() {
  
  const initState = {
    cart:[{
      name:'Product 1',
      id:'abc',
      price:20
    }]
  }

  const root_reducer = function(state = initState,action){
    console.log(state)
    return state
  }

  const store = createStore(
    root_reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
  )
      

  return (
    <Provider store={store}>
        <Router>
          <div>
            {/* SWITCH LOCATION.PATHNAME
              CASE ADMIN: ADMIN
              CASE PRODUCT: PRODUCT
              
            */}
            {/* ADMIN  localhost:3000/admin */}
            <Navbarclient/>
            <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/admin/login">
                  <Login/>
              </Route>
              <Route path="/admin">
                  <ShoppingAdmin/>
              </Route>
              <Route path="/cart">
                <Cart/>
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
    
    </Provider>
  
  );
}
// npm i node-sass
export default App;
