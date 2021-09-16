import React , { useEffect }from "react";
import {Link } from 'react-router-dom';
import _ from 'lodash';
import music from "../../assets/channels4.jpg";

import { useDispatch, useSelector } from "react-redux";
import { getCategory as httpGetCategory } from "../../httpService/categories";
import { CategoriesActions } from "../../store/Categories";
import Empty from '../UIs/Empty';
const CategoryDetails = (props) => {
  const api = process.env.REACT_APP;
  const dispatch = useDispatch();
  const category = useSelector((state) => state.Categories.category);

  useEffect(() => {
    async function fetch() {
      dispatch(
        CategoriesActions.onChangeCategory({
          data: await httpGetCategory(props.match.params.id),
        })
      );
    }
    fetch();
  }, [dispatch, props.match.params.id]);

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
                <div className="category-filter-btns  border-normal d-flex mr-2">
                  <div className="text-center font-noto h5 p-1 px-3 m-0 bg-normal text-light">
                    {" "}
                    Local
                  </div>
                  <div className="text-center font-noto h5 p-1 m-0">
                    {" "}
                    Intenational
                  </div>
                </div>
                <div className="category-filter-btns  border-normal d-flex mt-3 mr-2">
                  <div className="text-center font-noto h5 p-1 m-0 px-2 bg-normal text-light">
                    Alternative
                  </div>
                  <div className="text-center font-noto h5 p-1 m-0">
                    Mainstream
                  </div>
                </div>
              </div>
            </div>
            <div className="b-overlay-wrap position-relative">
              <div className="row">
                {category && category.artists ? (
                  category.artists.map((item, index) => {
                    return (
                      <div className="mb-3 col-md-4 col-6" key={index}>
                        <Link
                          to={`/artist/${item.id}/${item.name}`}
                          className="category-artist text-decoration-none"
                        >
                          <div className="artist-info">
                            <div className="artist-image">
                            {
                              item.image?
                              <img alt="" src={`(${ api + item.image })`} className="" />
                              :
                              <img alt="" src={music} className="" />
                            }
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
                          <div className="artist-actions mt-1">
                            <svg
                              aria-hidden="true"
                              width="36"
                              height="32"
                              viewBox="0 0 576 512"
                              focusable="false"
                              className="bg-normal p-1 action-icon fa-icon"
                              style={{ fontSize: "2.25em" }}
                            >
                              <g>
                                <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                              </g>
                            </svg>
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
                          </div>
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <Empty/>
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
