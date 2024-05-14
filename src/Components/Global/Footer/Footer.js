import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Blog from '../../../Pages/Blog/Blog';



const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className='row'>
                    <div className="bg-dark p-3 rounded-5 my-2 py-5 ">
                        <div className="row d-flex align-items-center ">
                            <div className="col-sm-12 col-md-6 ps-5 ">
                                <h1 className="text-light fw-bolder mb-2">
                                    Our  <span className="text-primary"> News letter</span>
                                </h1>
                                <p className="text-secondary ">
                                    Get updates by subscribe our weekly newsletter.{" "}
                                </p>
                            </div>

                            <div className="col-sm-12 col-md-6  ml-auto">
                                <div className='row'>
                                    {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
                                    <div className='col-sm-12 col-md-9 pr-0'>
                                        <input type="email" className="form-control rounded-5 bg-secondary pr-0 mb-2" id="exampleFormControlInput1" placeholder=" Enter your email..." />
                                    </div>
                                    <div className='col-sm-12 col-md-3 pr-0'>
                                        <button type="button" class="btn rounded-4 w-100 btn-outline-primary md-flex justify-content-md-end">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <MDBFooter style={{ fontSize: '14px' }} className='text-center text-lg-start text-muted'>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>

                <section>
                    <MDBContainer style={{ backgroundColor: '#EFF5FC' }} className='text-center text-md-start py-5 rounded-5'>
                        <MDBRow className=' '>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    <img src='https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/05/logo-footer.png' />

                                </h6>
                                <span className='fw-bold'>Our Address:</span>
                                <p>No. 869 General Trade Center,
                                    California, USA</p>24/7 Free Call:<br />+1 (800) 333 456

                                <div className='d-flex fs-4 gap-3 mt-5 text-primary all-footer-btn'>
                                    <FaTwitter style={{ cursor: 'pointer' }} />
                                    <FaInstagram style={{ cursor: 'pointer' }} />
                                    <FaFacebook style={{ cursor: 'pointer' }} />
                                </div>


                            </MDBCol>



                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        FAQs
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Refund
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Privacy Policy
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Report
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        DMCA
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Our Shop
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Services
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        News
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Contact
                                    </a>
                                </p>
                                <p>
                                    <Link to={'./Blog'} className='text-reset'>
                                        Blog
                                    </Link>
                                </p>
                            </MDBCol>


                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Information</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        About Us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Our Services
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing Plan
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Vendor Shop
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Affiliate
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Stores
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Products
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Payment
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Discount
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Promotional
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Gifts
                                    </a>
                                </p>

                            </MDBCol>








                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href=' '>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
        </div>






    )
}

export default Footer