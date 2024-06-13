import { Table } from "reactstrap";
import { BsXCircle } from "react-icons/bs";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "axios";
import { useSelector } from "react-redux";

function Shopping() {
  

  const ResponseCart = useSelector(state => state?.cart?.cartItem);
  console.log(ResponseCart);


  useEffect(() => {
    console.log(ResponseCart);
  })

  const [product, setProducts] = useState([]);

  // const FetchProducts = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/products");
  //   if (response?.status === 200) {
  //     const Related = response?.data?.find((element) => element?.id === 5);
  //     setProducts(Related);
  //   }
  //   // console.log(products);
  // };

  const FetchRelated = async () => {
    const response = await axios.get("https://fakestoreapi.in/api/products/7");
    if (response?.status === 200) {
      setProducts(response?.data?.product);
    }
  };

  useEffect(() => {
    FetchRelated();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row my-4 p-4">
          <div className="col-4 d-flex justify-content-end align-items-center">
            <Bs1CircleFill className="fs-3 me-2" />
            <h3 className="d-flex justify-content-end align-items-center mb-0 fw-normal ">
              {" "}
              <Link
                to={"/cart"}
                className="text-decoration-none text-black fw-semibold"
              >
                {" "}
                Shopping Cart
              </Link>
            </h3>
            <BsArrowRightShort className="fs-2 ms-5 text-secondary" />
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <Bs2CircleFill className="fs-3 me-2 text-secondary" />
            <h3 className="d-flex justify-content-end align-items-center mb-0 text-secondary fw-normal">
              {" "}
              <Link
                to={"/chechout"}
                className="text-decoration-none text-secondary fw-normal"
              >
                Checkout Details{" "}
              </Link>
            </h3>
            <BsArrowRightShort className="fs-2 ms-5 text-secondary" />
          </div>
          <div className=" col-4 d-flex justify-content-start align-items-center">
            <Bs3CircleFill className="fs-3 me-2 text-secondary" />
            <h3 className="d-flex justify-content-end align-items-center mb-0 text-secondary fw-normal">
              {" "}
              <Link
                to={"/order"}
                className="text-decoration-none text-secondary fw-normal"
              >
                Order Complete{" "}
              </Link>
            </h3>
          </div>
        </div>

        <Table>
          <thead>
            <tr>
              <th> #</th>
              <th>Images</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-items-center">
              <th scope="row">
                <BsXCircle className=" fs-5 text-danger" />
              </th>
              <td style={{ width: "380px" }}>
                <img
                  className="h-25 w-25"
                  src="https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/pr7-1-600x600.jpg"
                  alt="fhjfhf"
                />
              </td>
              <td>
                <span className="align-items-center justify-content-center">
                  {" "}
                  Xbox One
                </span>
              </td>
              <td>
                <span> $499.00</span>
              </td>
              <td>
                <span>
                  {" "}
                  <div
                    class="btn-group me-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button type="button" class="btn  ">
                      +
                    </button>
                    <button type="button" class="btn   ">
                      1
                    </button>
                    <button type="button" class="btn  ">
                      -
                    </button>
                  </div>
                </span>{" "}
              </td>
              <td>
                <span> $499.00</span>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="text-end mb-4">
          <Link to={'/shop'}
            type="button"
            class=" btn btn-primary fw-bold rounded-pill px-5 py-2"
          >
            {" "}
            Continue Shopping
          </Link>
        </div>

        <div className="row">
          <div className="col-6 py-5 ">
            <div className="border-2 p-4 rounded-5">
              <div className="fs-4 fw-fw-bolder">
                <span>You may be interested in ...</span>
                <hr />
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 mt-3">
                  <div className="card m-1 w-100">
                    <div className="image-container">
                      <img
                        src={product?.image}
                        style={{
                          width: "200px",
                          height: "290px",
                          justifyContent: "center",
                          marginLeft: "20PX",
                        }}
                        alt="vghdgt"
                      />

                      <div className="price">${product?.price}</div>
                    </div>
                    <label className="favorite">
                      <input checked="" type="checkbox" />
                      <svg viewBox="0 0 24 24" fill="#000000">
                        <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
                      </svg>
                    </label>

                    <div className="content">
                      <div className="brand text-uppercase">
                        {product?.category}
                      </div>
                      <div className="product-name">{product?.title}</div>
                      <div className="classnamer-size-container"></div>
                      <div className="rating">
                        <svg
                          viewBox="0 0 99.498 16.286"
                          className="svg four-star-svg"
                        >
                          <path
                            fill="#fc0"
                            transform="translate(-0.001 -1.047)"
                            d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                            id="star-svgrepo-com"
                          ></path>
                          <path
                            fill="#fc0"
                            transform="translate(20.607 -1.047)"
                            d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                            data-name="star-svgrepo-com"
                            id="star-svgrepo-com-2"
                          ></path>
                          <path
                            fill="#fc0"
                            transform="translate(41.215 -1.047)"
                            d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                            data-name="star-svgrepo-com"
                            id="star-svgrepo-com-3"
                          ></path>
                          <path
                            fill="#fc0"
                            transform="translate(61.823 -1.047)"
                            d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                            data-name="star-svgrepo-com"
                            id="star-svgrepo-com-4"
                          ></path>
                          <path
                            fill="#e9e9e9"
                            transform="translate(82.431 -1.047)"
                            d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                            data-name="star-svgrepo-com"
                            id="star-svgrepo-com-5"
                          ></path>
                        </svg>
                        (29,062)
                      </div>
                    </div>

                    <Link
                      to={`/shop/product/${product?.id}`}
                      className="button-container"
                    >
                      <button className="buy-button button">Buy Now</button>
                      <button className="cart-button button">
                        <svg viewBox="0 0 27.97 25.074">
                          <path
                            d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z"
                            id="cart-shopping-solid"
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 py-5 ">
            <div className="border-2 p-4 rounded-5">
              <div className="fs-4 fw-fw-bolder">
                <span>Cart totals</span>
                <hr />
              </div>
              <div>
                <table className="border-2 rounded w-100">
                  <tbody>
                    <tr>
                      <th className="py-4 p-4">
                        <span> Subtotal</span>
                      </th>
                      <td className="ms-3">
                        <span> $1,098.00 </span>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 p-4">
                        <span>Total </span>
                      </th>
                      <td className="ms-3">
                        <span>$1,098.00 </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-end my-4">
                <Link to={'/Chechout'}
                  type="button"
                  class=" btn btn-primary fw-bold rounded-pill px-5 py-2"
                >
                  {" "}
                  Proceed to checkout{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopping;
