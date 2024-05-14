import React from 'react'

// import { FaArrowAltCircleRight } from "react-icons/fa";

const Virtualreality = () => {
    return (

        <>
            <div className="container">
                <div className=" back-bg p-4 rounded-4 my-5 py-5 ">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6 ps-5">
                            <h1 className="text-blue fw-bolder mb-5  ">
                                <div>
                                    Get <span className="text-primary">Virtual Reality</span>
                                </div>
                                <div>with 30% off.</div>
                            </h1>
                            <p className="text-blue mb-5  ">
                                iPad is a line of tablet computers designed, developed and
                                marketed by Apple Inc., which run the iOS and iPad OS mobile
                                operating systems.{" "}
                            </p>
                            <div className=" justify-content-start align-items-center">
                                <button className="row justify-content-center align-items-center bg-primary text-light px-5 py-3 rounded-pill  hover:opacity-70 fw-bold">
                                    {" "}
                                    Get 30% Off Now
                                    {/* <FaArrowAltCircleRight className="mr-2 " /> */}
                                </button>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img src='https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/05/img1-1.png' />

                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}
export default Virtualreality;
