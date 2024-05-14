import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import { BsCheckCircle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoIosCopy } from "react-icons/io";
import "./SingleProduct.css";

export const SingleProduct = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [singleProducts, setsingleProducts] = useState([]);

  const FetchProducts = async () => {
    const response = await axios.get(
      `https://fakestoreapi.in/api/products/${id}`
    );
    if (response?.status === 200) {
      setsingleProducts(response?.data?.product);
    }

    // const singleProduct = products?.filter((single) => single?.id == id);
    // setsingleProducts(singleProduct);
    // console.log(singleProduct);
  };

  useEffect(() => {
    FetchProducts();
  });

  return (
    <div>
      <div className="container">
        <div className=" p-3 rounded-4 my-3 py-5">
          <div className="row ">
            <div className="col-sm-12 col-md-6 ps-5">
              <img src={singleProducts?.image} className="img-fluid"></img>
            </div>
            <div className="col-sm-12 col-md-6 ps-5">
              <h3 className="text-light fw-bolder">
                <span className="text-primary">{singleProducts?.title}</span>
              </h3>
              <div className="d-flex justify-content-start align-items-center">
                <h4 className="text-secondary me-2 line-through">$999</h4>
                <h4 className="text-black fw-semibold fs-2 text-decoration-linethrough">
                  ${singleProducts?.price}
                </h4>
              </div>

              <div className="d-flex justify-content-start align-items-center">
                <button className="buy-button button rounded-pill me-3 py-3">
                  {" "}
                  Add to cart
                </button>
                <span className="bg-primary m-2 p-3 rounded-full ">
                  <FaRegHeart style={{ color: "white" }} />
                </span>
                <span className="bg-primary m-2 p-3 rounded-full ">
                  <IoGitCompareSharp style={{ color: "white" }} />
                </span>
              </div>
              <div>
                <p>{singleProducts?.description}</p>
              </div>
              <hr />
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <span>Brand</span>
                      </th>
                      <td className="ms-3">
                        <span>XTRA</span>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span>SKU</span>
                      </th>
                      <td className="ms-3">
                        <span>SKU_1198</span>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span>Status</span>
                      </th>
                      <td className="ms-3">
                        <span>72 in stock</span>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span>Tags</span>
                      </th>
                      <td className="ms-3">
                        <span>Morden, Watch</span>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span>Category</span>
                      </th>
                      <td className="ms-3">
                        <span>Tablets</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div>
                <ul className=" list-unstyled">
                  <li className="mb-2 d-flex justify-content-start align-items-center ">
                    <BsCheckCircle />
                    <span className="ms-2">
                      Free shipping on all orders over $100
                    </span>
                  </li>
                  <li className="mb-2 d-flex justify-content-start align-items-center ">
                    <BsCheckCircle />
                    <span className="ms-2">14 days easy refund & returns</span>
                  </li>
                  <li className="mb-2 d-flex justify-content-start align-items-center ">
                    <BsCheckCircle />
                    <span className="ms-2">
                      Product taxes and customs duties included
                    </span>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="d-flex border-3 border-secondary rounded-pill justify-content-between align-items-center px-1 py-2 d-none d-md-flex ">
                <span className="text-secondary:">Share this post</span>
                <span className="fs-4 rounded-full bg-secondary text-white p-2 me-2 ">
                  <FaFacebook />
                </span>
                <span className="fs-4 rounded-full bg-secondary text-white p-2 me-2">
                  <IoShareSocialSharp />
                </span>
                <span className="fs-4 rounded-full bg-secondary text-white p-2 me-2">
                  <FaPinterest />
                </span>
                <span className="fs-4 rounded-full bg-secondary text-white p-2 me-2">
                  <FaWhatsapp />
                </span>
                <span className="fs-4 rounded-full bg-secondary text-white p-2 me-2">
                  <FaTelegramPlane />
                </span>
                <span className="fs-4 rounded-full bg-secondary text-white p-2 me-2">
                  {" "}
                  <IoMail />
                </span>
                <span className="fs-4 rounded-full bg-secondary text-white p-2 me-2">
                  <IoIosCopy />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
