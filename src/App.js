import React from 'react';

import { Routes, Route } from 'react-router-dom';
//we are going to use Routes instead of Switch.

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div>
      <Routes>
       <Route exact path='/' element={<HomePage />} />
       <Route exact path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}
// 1.use element instead of component
//2.pass the component as JSX: <HomePage /> 

export default App;  
 