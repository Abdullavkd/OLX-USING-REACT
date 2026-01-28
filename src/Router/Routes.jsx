import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../Pages/ProductDetails';
import Sell from '../Pages/Sell';
import Home from '../Pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productdetails' element={<ProductDetails/>}/>
        <Route path='/sell' element={<Sell/>}/>
    </Routes>
  );
};

export default memo(AppRoutes);