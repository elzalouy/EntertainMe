import React, { useEffect, useState } from "react";

import music from "../../assets/channels4.jpg";
import slideImage1 from "../../assets/slideImage1.jpg";
import slideImage2 from "../../assets/slideImage2.jpg";
import slideImage3 from "../../assets/slideImage3.jpg";

import { useDispatch, useSelector } from "react-redux";
import { getArtist as httpGetArtist } from "../../httpService/categories";
import { ArtistsActions } from "../../store/Artists";
import { onSetDisLiked, onSetLiked } from "../../store/Favorites/actions";
import "./categories.css";
const Artist = (props) => {
  const [api] = useState(process.env.REACT_APP_IMAGE_URI);
  const dispatch = useDispatch();

  const artist = useSelector((state) => state.Artists.artist);
  const { favourites } = useSelector((state) => state.Favorites);
  const { logged } = useSelector((state) => state.UI);
  useEffect(() => {
    async function fetch() {
      dispatch(
        ArtistsActions.onChangeArtist({
          data: await httpGetArtist(props.match.params.id),
        })
      );
    }
    fetch();
  }, [dispatch, props.match.params.id]);
  const onHandleLike = () => {
    dispatch(onSetLiked(props?.match?.params?.id, logged));
  };
  const onDisLike = () => {
    dispatch(onSetDisLiked(props?.match?.params?.id, logged));
  };
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
                href={`/categoryDetails/${artist?.category.id}/${artist?.category.name}`}
                className="font-noto m-0 h3 text-decoration-none text-light"
              >
                {artist?.category.name}
              </a>
              <div className="category-seprator d-flex align-items-end">
                <span></span> <span></span> <span></span>
              </div>
              <h3 className="font-noto m-0 text-normal">{artist?.name}</h3>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <div className="single-artist text-decoration-none">
                  <div className="artist-info">
                    <div className="artist-image">
                      {artist?.image ? (
                        <img
                          alt=""
                          src={`${api + artist.image}`}
                          className=""
                        />
                      ) : (
                        <img alt="" src={music} className="" />
                      )}
                    </div>
                  </div>
                  <div className="artist-actions mt-3 align-items-center">
                    <div
                      className="b-overlay-wrap position-relative ml-1"
                      data-toggle={!logged && "modal"}
                      data-target={!logged && "#auth-required-modal"}
                    >
                      {favourites &&
                      favourites.findIndex(
                        (item) => item.artist_id === artist.id
                      ) >= 0 ? (
                        <div onClick={() => onDisLike()}>
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              fontSize: "18px",
                            }}
                            className="bi-heart-fill bg-normal p-1 action-icon b-icon bi"
                          ></div>
                        </div>
                      ) : (
                        <div onClick={() => onHandleLike()}>
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              fontSize: "18px",
                            }}
                            className="bi-heart bg-normal p-1 action-icon b-icon bi"
                          ></div>
                        </div>
                      )}
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
                  {artist?.name}
                </h2>
              </div>
              <div className="col-md-8">
                <div className="card rounded-0 single-artist-about px-lg-3">
                  <div className="card-body">
                    <h3 className="text-normal font-noto">About</h3>
                    <p className="text-light font-noto-m">
                      {artist?.description}
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
                      {artist?.events.map((item, index) => {
                        return (
                          <div
                            className="mb-3 mr-3 text-light font-noto single-prev-event"
                            key={index}
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
                            <span>{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};
export default Artist;
