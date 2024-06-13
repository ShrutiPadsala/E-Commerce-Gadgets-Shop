import React from 'react';
import './App.css'
import SiteNavbar from './Components/Global/Navbar/SiteNavbar';
import Footer from './Components/Global/Footer/Footer'
import {  Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Shop } from './Pages/Shop/Shop';
import { SingleProduct } from './Pages/Shop/SingleProduct/SingleProduct';
import { Category } from './Pages/Shop/Category/Category';
import { Create } from './Pages/User/Create/Create';
import Login from './Pages/User/Login/Login';
import Cart from './Pages/User/Cart';
import Chechout from './Pages/chechout/Chechout';
import Shopping from './Pages/chechout/Shopping';
import Order from './Pages/chechout/Order';
import Blog from './Pages/Blog/Blog';

// Import Pages
// const SiteNavbar = React.lazy(() => import("./Components/Global/Navbar/SiteNavbar"));
// const Home = React.lazy(() => import("./Pages/Home/Home"));
// const Product = React.lazy(() => import("./Components/Indivedual/products/Product"));



export const App = () => {
  return (
    <>
      <SiteNavbar />
 

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/product/:id' element={<SingleProduct />} />
          <Route path='/product-cateogry/:id' element={<Category />} />
          <Route path='/create-account/' element={<Create />} />
          <Route path='/login/' element={<Login />} />
          {/* <Route path='/Cart/' element={<Cart />} /> */}
          <Route path='/Chechout/' element={<Chechout />} />
          <Route path='/Cart/' element={<Shopping />} />
          <Route path='/Order/' element={<Order />} />
          <Route path='/Blog/' element={<Blog />} />


        </Routes>
 

      <Footer />
    </>
  )
}
