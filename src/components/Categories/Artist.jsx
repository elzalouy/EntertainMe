import React from "react";

import musician1 from "../../assets/foaG.png";
import slideImage1 from "../../assets/slideImage1.jpg";
import slideImage2 from "../../assets/slideImage2.jpg";
import slideImage3 from "../../assets/slideImage3.jpg";

const Artist = () => {
  return (
    <main>
      <main id="single-artist-page">
        <div className="b-overlay-wrap position-relative">
          <div className="py-3 container">
            <div className="category-name d-flex text-white flex-wrap">
              <a
                href="/categories"
                className="m-0 h3 font-noto text-decoration-none text-light"
              >
                Categories
              </a>
              <div className="category-seprator d-flex align-items-end">
                <span></span> <span></span> <span></span>
              </div>
              <a
                href="/categories/3"
                className="font-noto m-0 h3 text-decoration-none text-light"
              >
                Musicians
              </a>
              <div className="category-seprator d-flex align-items-end">
                <span></span> <span></span> <span></span>
              </div>
              <h3 className="font-noto m-0 text-normal">Brass Sound Band</h3>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <div className="single-artist text-decoration-none">
                  <div className="artist-info">
                    <div className="artist-image">
                      <img alt="1" src={musician1} className="" />
                    </div>
                  </div>
                  <div className="artist-actions mt-3 align-items-center">
                    <div
                      className="b-overlay-wrap position-relative ml-1"
                      data-toggle="modal"
                      data-target="#auth-required-modal"
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 20 20"
                        focusable="false"
                        role="img"
                        alt="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi-heart bg-normal p-1 action-icon b-icon bi"
                        style={{ fontSize: "225%" }}
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z"
                            clipRule="evenodd"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="btn h-100 ml-1 btn-normal btn-sm btn-block rounded-0"
                    >
                      Add to Booking
                    </button>
                  </div>
                </div>
                <h2 className="text-center mt-3 font-noto text-light">
                  Brass Sound Band
                </h2>
              </div>
              <div className="col-md-8">
                <div className="card rounded-0 single-artist-about px-lg-3">
                  <div className="card-body">
                    <h3 className="text-normal font-noto">About</h3>
                    <p className="text-light font-noto-m">
                      Do you love music ? Do you love crazy mode ?! Well brass
                      sound gives you both
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-2">
                <h5 className="text-normal font-noto-m works-section-title">
                  <span></span>
                  Videos
                </h5>
              </div>
              <div className="col-md-10">
                <section className="artist-works">
                  <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper">
                      <div
                        tag="div"
                        className="swiper-slide swiper-slide-active"
                        style={{ width: "920px", marginRight: "10px" }}
                      >
                        <div className="work-content">
                          <iframe
                            title="1"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/gho0l7pV-ek"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen=""
                          ></iframe>
                        </div>
                      </div>
                      <div
                        tag="div"
                        className="swiper-slide swiper-slide-next"
                        style={{ width: "920px", marginRight: "10px" }}
                      >
                        <div className="work-content">
                          <iframe
                            title="2"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/w0uf-Xgvkgk"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen=""
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-button-next"
                      tabIndex="0"
                      role="button"
                      aria-label="Next slide"
                      aria-disabled="false"
                    ></div>
                    <div
                      className="swiper-button-prev swiper-button-disabled"
                      tabIndex="0"
                      role="button"
                      aria-label="Previous slide"
                      aria-disabled="true"
                    ></div>
                    <span
                      className="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                    <span
                      className="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                </section>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-2">
                <h5 className="text-normal font-noto-m works-section-title">
                  <span></span>
                  Images
                </h5>
              </div>
              <div className="col-md-10">
                <section className="artist-works">
                  <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div
                      className="swiper-wrapper"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <div
                        tag="div"
                        className="swiper-slide swiper-slide-active"
                        style={{ width: "920px", marginRight: "10px" }}
                      >
                        <div className="work-content">
                          <img
                            alt="2"
                            src={slideImage1}
                            className="img-fluid mx-auto d-block"
                          />
                        </div>
                      </div>
                      <div
                        tag="div"
                        className="swiper-slide swiper-slide-next"
                        style={{ width: "920px", marginRight: "10px" }}
                      >
                        <div className="work-content">
                          <img
                            alt="3"
                            src={slideImage2}
                            className="img-fluid mx-auto d-block"
                          />
                        </div>
                      </div>
                      <div
                        tag="div"
                        className="swiper-slide"
                        style={{ width: "920px", marginRight: "10px" }}
                      >
                        <div className="work-content">
                          <img
                            alt="4"
                            src={slideImage3}
                            className="img-fluid mx-auto d-block"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-button-next"
                      tabIndex="0"
                      role="button"
                      aria-label="Next slide"
                      aria-disabled="false"
                    ></div>
                    <div
                      className="swiper-button-prev swiper-button-disabled"
                      tabIndex="0"
                      role="button"
                      aria-label="Previous slide"
                      aria-disabled="true"
                    ></div>
                    <span
                      className="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                    <span
                      className="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                </section>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-2">
                <h5 className="text-normal font-noto-m works-section-title">
                  <span></span>
                  Previous Events
                </h5>
              </div>
              <div className="col-md-10">
                <div className="card rounded-0 previous-events  h-100 px-lg-3">
                  <div className="card-body">
                    <div className="d-flex flex-wrap">
                      <div className="mb-3 mr-3 text-light font-noto single-prev-event">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          focusable="false"
                          role="img"
                          alt="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi-three-dots dots b-icon bi"
                        >
                          <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                            <path
                              fillRule="evenodd"
                              d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                        <span>Cairo Opera House</span>
                      </div>
                      <div className="mb-3 mr-3 text-light font-noto single-prev-event">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          focusable="false"
                          role="img"
                          alt="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi-three-dots dots b-icon bi"
                        >
                          <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                            <path
                              fillRule="evenodd"
                              d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                        <span>Cairo University</span>
                      </div>
                      <div className="mb-3 mr-3 text-light font-noto single-prev-event">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          focusable="false"
                          role="img"
                          alt="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi-three-dots dots b-icon bi"
                        >
                          <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                            <path
                              fillRule="evenodd"
                              d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                        <span>Misr University for Science Technology</span>
                      </div>
                      <div className="mb-3 mr-3 text-light font-noto single-prev-event">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          focusable="false"
                          role="img"
                          alt="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi-three-dots dots b-icon bi"
                        >
                          <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                            <path
                              fillRule="evenodd"
                              d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                        <span>Cairo Opera House</span>
                      </div>
                      <div className="mb-3 mr-3 text-light font-noto single-prev-event">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          focusable="false"
                          role="img"
                          alt="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi-three-dots dots b-icon bi"
                        >
                          <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                            <path
                              fillRule="evenodd"
                              d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                        <span>Cairo University</span>
                      </div>
                      <div className="mb-3 mr-3 text-light font-noto single-prev-event">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          focusable="false"
                          role="img"
                          alt="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi-three-dots dots b-icon bi"
                        >
                          <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                            <path
                              fillRule="evenodd"
                              d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                        <span>Misr University for Science Technology</span>
                      </div>
                      <div className="mb-3 mr-3 text-light font-noto single-prev-event">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          focusable="false"
                          role="img"
                          alt="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi-three-dots dots b-icon bi"
                        >
                          <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                            <path
                              fillRule="evenodd"
                              d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                        <span>Cairo Opera House</span>
                      </div>
                      <div className="mb-3 mr-3 text-light font-noto single-prev-event">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          focusable="false"
                          role="img"
                          alt="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi-three-dots dots b-icon bi"
                        >
                          <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                            <path
                              fillRule="evenodd"
                              d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                        <span>Cairo University</span>
                      </div>
                      <div className="mb-3 mr-3 text-light font-noto single-prev-event">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          focusable="false"
                          role="img"
                          alt="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi-three-dots dots b-icon bi"
                        >
                          <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                            <path
                              fillRule="evenodd"
                              d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                        <span>Misr University for Science Technology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="auth-required-modal" className="modal fade">
        <div className="modal-dialog modal-md modal-dialog-centered">
          <span tabIndex="0"></span>
          <div
            role="document"
            id="auth-required-modal___BV_modal_content_"
            tabIndex="-1"
            className="modal-content"
          >
            <div
              id="auth-required-modal___BV_modal_body_"
              className="modal-body bg-dark text-light"
            >
              <div className="font-noto text-center h4">
                <strong>Login</strong> required to do this action
              </div>
            </div>
            <footer
              id="auth-required-modal___BV_modal_footer_"
              className="modal-footer bg-dark"
            >
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a target="_self" href="/login" className="btn btn-normal">
                Login
              </a>
            </footer>
          </div>
          <span tabIndex="0"></span>
        </div>
      </div>
    </main>
  );
};
export default Artist;
