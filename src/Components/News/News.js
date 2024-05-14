import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Pagination } from 'swiper/modules';

const News = () => {
    return (
        <>
            <div className='container'>
                <div className='letest row'>
                    <div className='col-md-6 col-sm-12'>
                        <h1 className='text-dark'>Latest
                            <span className='text-primary'> News</span>
                        </h1>
                        <p>  Get updated with the latest news of new technologies and gadgets  </p>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <button class="button3 all-news-btn">
                            All News
                            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                                <path
                                    clip-rule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="py-5"
                    breakpoints={{
                        // when window width is >= 640px
                        640: {

                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {

                            slidesPerView: 3,
                        },
                    }}
                >


                    <SwiperSlide>
                        <img className=' news-img rounded-5' src='https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/05/blog6-1.jpg' />
                        <h5 className='text-blue fw-bolder  '> Principles Of Coldness</h5><span className='fs-6 text-primary'>june 10,2017</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-5' src='https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/05/blog7-1.jpg' />
                        <h5 className='text-blue fw-bolder  '> Much Space in world</h5><span className='fs-6 text-primary'>june 10,2017</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-5' src='https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/05/blog1-1.jpg' />
                        <h5 className='text-blue fw-bolder '> Inspired by you</h5><span className='fs-6 text-primary'>june 10,2017</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-5' src='https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/05/blog8-1.jpg' />
                        <h5 className='text-blue fw-bolder  '> How to create a Logo like a Pro </h5><span className='fs-6 text-primary'>june 10,2017</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-5' src='https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/05/blog2-1.jpg' />
                        <h5 className='text-blue fw-bolder  '>A Place of Slience</h5><span className='fs-6 text-primary'>june 10,2017</span>
                    </SwiperSlide>
                </Swiper>
            </div>


        </>
    )
}

export default News