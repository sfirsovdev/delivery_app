import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Homepage } from '../pages/Homepage'
import { ShopingCart } from '../pages/ShopingCart'



const App = () => {
  return (
      <div>
        <header className='header'>
          <li className='li'><NavLink to="/">Home</NavLink></li>
          <li className='li'><NavLink to="/shopingcart">Shoping Cart</NavLink></li>
        </header>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/shopingcart' element={<ShopingCart />} />
        </Routes>
      </div>
    
  );
};


export default App;