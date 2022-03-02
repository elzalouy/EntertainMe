import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import music from "../../assets/channels4.jpg";

import { useDispatch, useSelector } from "react-redux";
import { onSetDisLiked, onSetLiked } from "../../store/Favorites/actions";
import {
  onFilterArtists,
  onLoadArtists,
  onLoadCategory,
} from "../../store/Categories/actions";
import {
  addArtistToCart,
  onRemoveArtistFromCart,
} from "../../store/Events/actions";
import MusicRadio from "../../UICore/Category/MusicRadio";
import PresnseRadioButtons from "../../UICore/Category/PresenseRadio";

const CategoryDetails = (props) => {
  const api = process.env.REACT_APP_IMAGE_URI;
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { logged } = useSelector((state) => state.UI);
  const { category, selectedArtists, filter, selectedFilteredArtists } =
    useSelector((state) => state.Categories);
  const { favourites } = useSelector((state) => state.Favorites);
  const { cart } = useSelector((state) => state.Events);
  const { FilterSelectedArtists } = useSelector((state) => state.Artists);
  useEffect(() => {
    console.log("selected artists changed");
    dispatch(onFilterArtists(selectedArtists, filter));
  }, [selectedArtists, filter]);
  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
  });
  useEffect(() => {
    setPage(1);
    dispatch(onLoadCategory(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  useEffect(() => {
    if (loading === true) {
      // load artists
      if (page < category?.artists?.last_page) {
        let newp = page;
        newp = ++newp;
        setPage(newp);

        dispatch(onLoadArtists(category.id, newp));
      }
      setLoading(false);
    }
  }, [loading]);
  const onHandleLike = (id) => {
    dispatch(onSetLiked(id, logged));
  };
  const onDisLike = (id) => {
    dispatch(onSetDisLiked(id, logged));
  };
  const trackScrolling = () => {
    const wrappedElement = document?.getElementById("list");
    if (isBottom(wrappedElement) && loading === false) {
      setLoading(true);
    }
  };

  const isBottom = (el) => {
    return el?.getBoundingClientRect()?.bottom <= window.innerHeight;
  };
  const onAddToCart = (item) => {
    dispatch(addArtistToCart(FilterSelectedArtists, item));
  };
  const onRemoveFromCart = (item) => {
    dispatch(onRemoveArtistFromCart(FilterSelectedArtists, item));
  };
  return (
    <React.Fragment>
      <main>
        <main id="single-category-page">
          <div className="container">
            <div className="category-navbar d-flex justify-content-md-between justify-content-center mb-3 flex-wrap">
              <div className="category-navbar-left">
                <div className="category-name d-flex text-white">
                  <a
                    href="/categories"
                    className="m-0 font-noto h3 text-light text-decoration-none router-link-active"
                  >
                    Categories
                  </a>
                  <div className="category-seprator d-flex align-items-end">
                    <span></span> <span></span> <span></span>
                  </div>
                  <h3 className="font-noto m-0 text-normal">
                    {props.match.params.name}
                  </h3>
                </div>
                <div className="search mt-3">
                  <input
                    type="text"
                    className="border-0 form-control"
                    id="__BVID__1017"
                  />
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    focusable="false"
                    role="img"
                    alt="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-search search-icon b-icon bi text-light"
                    style={{ fontSize: "150%" }}
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        fillRule="evenodd"
                        d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <span
                    aria-hidden="true"
                    className="search-icon spinner-border spinner-border-sm text-light"
                    style={{ display: "none" }}
                  ></span>
                </div>
              </div>
              <div className="category-navbar-right text-normal flex-md-column flex-wrap flex-row mt-3">
                <div className="category-filter-btns  border-normal d-flex mt-3 mr-2">
                  <MusicRadio />
                </div>

                <div className="category-filter-btns border-normal d-flex mr-2">
                  <PresnseRadioButtons />
                </div>
              </div>
            </div>
            <div className="b-overlay-wrap position-relative">
              <div className="row" id="list">
                {selectedFilteredArtists &&
                selectedFilteredArtists.length > 0 ? (
                  selectedFilteredArtists.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="mb-3 col-md-4 col-6" key={index}>
                          <div className="category-artist text-decoration-none">
                            <Link to={`/artist/${item.id}/${item.name}`}>
                              <div className="artist-info">
                                <div className="artist-image">
                                  {item.image ? (
                                    <img
                                      alt=""
                                      src={`${api + item.image}`}
                                      className=""
                                    />
                                  ) : (
                                    <img alt="" src={music} className="" />
                                  )}
                                </div>
                                <div className="artist-about font-noto-m">
                                  {_.truncate(item.description, {
                                    length: 80,
                                    separator: " ",
                                  })}
                                </div>
                              </div>
                              <div className="artist-name my-2">
                                <h5 className="m-0 font-noto text-light">
                                  {_.truncate(item.name, {
                                    length: 20,
                                    separator: " ",
                                  })}
                                </h5>
                              </div>
                            </Link>
                            <div className="artist-actions mt-1">
                              {cart &&
                              cart.artists &&
                              cart.artists?.length > 0 &&
                              cart.artists.findIndex((i) => i === item.id) >=
                                0 ? (
                                <>
                                  <div
                                    onClick={() => onRemoveFromCart(item)}
                                    className="b-overlay-wrap position-relative ml-1"
                                  >
                                    <i
                                      style={{
                                        width: "auto",
                                        height: "auto",
                                        fontSize: "20px",
                                      }}
                                      className="bi-cart-x bg-normal p-1 action-icon b-icon bi"
                                    />
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div
                                    onClick={() => onAddToCart(item)}
                                    className="b-overlay-wrap position-relative ml-1"
                                  >
                                    <i
                                      style={{
                                        width: "auto",
                                        height: "auto",
                                        fontSize: "20px",
                                      }}
                                      className="bi-cart-plus bg-normal p-1 action-icon b-icon bi"
                                    />
                                  </div>
                                </>
                              )}
                              {favourites?.length > 0 &&
                              favourites.findIndex(
                                (i) => i?.artist_id === item?.id
                              ) < 0 ? (
                                <>
                                  <div
                                    className="b-overlay-wrap position-relative ml-1"
                                    onClick={() => onHandleLike(item.id)}
                                  >
                                    <i
                                      style={{
                                        width: "auto",
                                        height: "auto",
                                        fontSize: "20px",
                                      }}
                                      className="bi-heart bg-normal p-1 action-icon b-icon bi"
                                    />
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div onClick={() => onDisLike(item.id)}>
                                    <div
                                      style={{
                                        width: "auto",
                                        height: "auto",
                                        fontSize: "20px",
                                        marginLeft: "4px",
                                      }}
                                      className="bi-heart-fill bg-normal p-1 action-icon b-icon bi"
                                    ></div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <React.Fragment>
                    <div className="row">
                      <h4 className="text-normal text-center my-3">
                        Sorry no Artists found in
                        {/* {active1 === 0 ? " Local " : " International "} and
                        {active2 === 0 ? " Alternative " : " Mainstream "} */}
                        filters, please adjust the filters and try again.
                      </h4>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </main>
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
              <a target="_self" href="/login" className="btn btn-primary">
                Login
              </a>
            </footer>
          </div>
          <span tabIndex="0"></span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoryDetails;
