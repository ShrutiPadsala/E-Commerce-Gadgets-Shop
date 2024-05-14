import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const Promotion = () => {
  return (
    <>
      <div className="container">
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <div className=" promotion-img  d-flex bg-dark p-4 rounded-4 my-2 py-5">
              <div className="row align-items-center">
                <div className="col-12 ps-4">
                  <h1 className="text-light fw-bolder mb-5">
                    <div>
                      <span className="text-white fw-normal fw-normal fs-4">TABLETS</span>
                    </div>
                    <div> Apple iPad Air</div>
                  </h1>
                  <p className="text-light mb-5 w-50">
                    iPad is a line of tablet computers designed, developed and
                    marketed by Apple Inc., which run the iOS and iPad OS mobile
                    operating systems.{" "}
                  </p>
                  <div className="d-flex justify-content-start align-items-center  ">
                    <button className="d-flex justify-content-start align-items-center bg-dark text-light px-4 py-3 rounded-pill fw-bold">
                      {" "}
                      Buy Now <FaArrowAltCircleRight className="ms-3" />
                    </button>
                    <div className="d-flex justify-content-start align-items-center text-light px-3 py-4 rounded-pill fw-bold">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='col-md-6 col-sm-12'>
            <div className=" promotion-img1 bg-dark p-4 rounded-4 my-2 py-5">
              <div className="row align-items-center">
                <div className="col-12 ps-4">
                  <h1 className="text-light fw-bolder mb-5">
                    <div>
                      <span className="text-white fw-normal fw-normal fs-4">SMART</span>
                    </div>
                    <div> Apple Watch</div>
                  </h1>
                  <p className="text-light mb-5 w-50">
                    iPad is a line of tablet computers designed, developed and
                    marketed by Apple Inc., which run the iOS and iPad OS mobile
                    operating systems.{" "}
                  </p>
                  <div className="d-flex justify-content-start align-items-center  ">
                    <button className="d-flex justify-content-start align-items-center bg-white text-black px-4 py-3 rounded-pill fw-bold">
                      {" "}
                      Buy Now <FaArrowAltCircleRight className="ms-3" />
                    </button>
                    <div className="row justify-content-start align-items-center text-light px-3 py-4 rounded-pill fw-bold">
                    </div>
                  </div>
                </div>
                {/* <div className="col-6"></div> */}

              </div>
            </div>
          </div>

        </div>

      </div>









    </>
  )
}

export default Promotion