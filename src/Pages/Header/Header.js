import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Header = () => {
  return (
    <div className="container">
      <header className="bg-dark p-3 rounded-4 my-3 py-5">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 ps-5">
            <h1 className="text-light fw-bolder mb-5">
              <div>
                Get <span className="text-primary">Best Device</span>
              </div>
              <div> With Lowest Price.</div>
            </h1>
            <p className="text-light mb-4">
              iPad is a line of tablet computers designed, developed and
              marketed by Apple Inc., which run the iOS and iPad OS mobile
              operating systems.{" "}
            </p>
            <div className="row justify-content-start align-items-center   ">
              <div className="col-sm-12 col-md-5">
                <button className="d-flex justify-content-start align-items-center bg-primary text-light px-3 py-2 rounded-pill fw-bold  hover:opacity-40  ">
                  {" "}
                  Explore Now <FaArrowAltCircleRight className="ms-2 " />
                </button>
              </div>
              <div className="col-sm-12 col-md-7">
                <div className="d-flex justify-content-start align-items-center text-light px-3 py-2 rounded-pill fw-bold">
                  <span className="fs-1 me-2">
                    <FaPlayCircle />
                  </span>
                  <span className="fs-6 fw-medium"> Watch Promotion</span>
                </div>
              </div>

            </div>
          </div>
          <div className="col-sm-12 col-md-6 ">
            <Swiper
              // slidesPerView={4}
              spaceBetween={50}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/slide1-1.png"
                  style={{ width: "29rem", marginTop: "40px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src="https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/slide2-1.png"
                  style={{ width: "29rem", marginTop: "40px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src="https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/04/slide3-1.png"
                  style={{ width: "29rem", marginTop: "40px" }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
