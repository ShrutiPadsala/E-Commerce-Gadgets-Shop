import React from "react";
import Header from "../Header/Header";
import Product from "../../Components/Indivedual/products/Product";
import Categories from "../../Components/Categories/Categories";
import Promotion from "../../Components/Promotions/Promotion";
import Virtualreality from "../../Components/Virtualreality/Virtualreality";
import News from "../../Components/News/News";

export const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <Promotion />
      <h2 className=' product ml-5'>Our
      <span className='text-black'> Products</span></h2>
      <Product />
      <Virtualreality />
      <News />
    </>
  )
}