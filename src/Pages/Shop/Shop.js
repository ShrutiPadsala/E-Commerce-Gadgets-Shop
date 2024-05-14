import React from "react";
// import { FaProductHunt } from "react-icons/fa6";
import Product from "../../Components/Indivedual/products/Product";

export const Shop = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h2 className=" product mb-0">
              Shop
              <span className="text-black"> Now</span>
            </h2>{" "}
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};
