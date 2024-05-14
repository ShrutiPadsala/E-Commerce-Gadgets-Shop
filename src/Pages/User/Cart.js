import React from "react";
 import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-4 d-flex justify-content-end align-items-center">
            <Bs1CircleFill className="fs-3 me-2" />
            <h3 className="d-flex justify-content-end align-items-center mb-0 fw-normal"> <Link to={"/shopping"}>
              {" "}
              Shopping Cart</Link>
            </h3>
            <BsArrowRightShort className="fs-2 ms-5 text-secondary" />
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <Bs2CircleFill className="fs-3 me-2 text-secondary" />
            <h3 className="d-flex justify-content-end align-items-center mb-0 text-secondary fw-normal"> <Link to={"/chechout"}>
              Checkout Details </Link>
            </h3>
            <BsArrowRightShort className="fs-2 ms-5 text-secondary" />
          </div>
          <div className=" col-4 d-flex justify-content-start align-items-center">
            <Bs3CircleFill className="fs-3 me-2 text-secondary" />
            <h3 className="d-flex justify-content-end align-items-center mb-0 text-secondary fw-normal"> <Link to={"/order"}>
              Order Complete </Link>
            </h3>
          </div>
        </div>
      </div>

      {/* 3 Components */}
      {/* 1. Shopping Cart */}
      {/* 2. Checkout Details */}
    </>
  );
}
export default Cart;
