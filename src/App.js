import React, {Component} from 'react';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';
import ShopPage from './pages/shop'
import ProductPage from './pages/single-product';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/responsive.css';
import './css/style.css';

class App extends Component {
  render(){
    return(
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/shop"  element={<ShopPage/>}></Route>
          <Route path="/product"  element={<ProductPage/>}></Route>
          <Route path="/cart"  element={<CartPage/>}></Route>
          <Route path="/checkout"  element={<CheckoutPage/>}></Route>
        </Routes>
      </Router>
    )
  }
}
export default App;
