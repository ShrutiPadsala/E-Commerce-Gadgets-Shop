import axios from "axios";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const BASE_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
  const API_SECRET = "96fcef19082c4b4f8eff2ad5b2b1caff";

  const [blogs, setBlogs] = useState([]);

  // API Type: GET, POST, PUT, DELETE
  console.log(`${BASE_URL}${API_SECRET}`);

  const fetchNews = async () => {
    const response = await axios.get(`${BASE_URL}${API_SECRET}`);
    if (response?.status === 200) {
      const filteredData = response?.data?.articles?.filter((blog) => {
        if (blog?.source?.id && blog?.source?.name) {
          if (blog?.content) {
            return blog;
          }
        }
      });
      setBlogs(filteredData);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-8">
            <div className="row">
              {blogs?.map((blog, index) => {
                return (
                  <div className="col-12 border-2 rounded-5 mb-2 ">
                    <div className="my-3">
                      <img
                        className="rounded-5 img-fluid mb-2"
                        src={blog?.urlToImage}
                        alt=""
                      />
                      <div className=" text-dark text-center">
                        <h4>{blog?.title}</h4>
                      </div>
                      <div>
                        <p className="text-truncate fs-6">{blog?.content}</p>
                      </div>

                      <div className="text-center">
                        <button
                          type="button"
                          class="btn btn-dark rounded-pill py-2"
                        >
                          {" "}
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div>
              <div className="border-2 rounded-4 py-5 d-flex justify-content-center">
                <div>
                  <input
                    className="border-2 rounded-pill py-2 px-2 me-1"
                    type="search"
                    name="text"
                    placeholder="search.."
                  />
                  <button type="button" class="btn btn-primary rounded-pill ">
                    {" "}
                    Search
                  </button>
                </div>
              </div>
              <div className="border-1 rounded-4 my-5 p-2">
                <h5 className="text-dark m-3 fw-bold">Tags Cloud</h5>
                <hr />
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  {" "}
                  article
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  computer
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  devloper
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  famous
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  interview
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  it
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  learn
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  money
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  photography
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  post
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  seo
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  website
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  wordpress
                </button>
                <button
                  type="button"
                  class="me-1 my-1 fs-6 btn btn-outline-primary rounded-pill "
                >
                  wp
                </button>
              </div>
              <div className="border-1 rounded-4 my-5">
                <h5 className="text-dark m-3 fw-bold">Ads</h5>
                <hr />
                <img
                  className="m-3 rounded-3"
                  src="https://xtratheme.com/wp-content/uploads/2017/06/ads.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
