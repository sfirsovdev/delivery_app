import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShopingCart from './pages/ShopingCart'
import Header from './components/header/Header';



const App = () => {
  return (
      <div>
        <Header>
    
        </Header>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/shopingcart' element={<ShopingCart />} />
        </Routes>
      </div>
    
  );
};


export default App;