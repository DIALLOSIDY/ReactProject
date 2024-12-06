import React from 'react';
import logo from '../logo.svg';
import Banner from './Banner';
import Cart from './Cart';
import Shoppinglist from './ShoppigList';
import Footer from './Footer'

function App() {
  return (<React.Fragment>
    <Banner/>
    <Cart/>
    <Shoppinglist/>
    <Footer/>
  </React.Fragment>);
}

export default App;
