import React, { useState } from "react";
import Logo from "../logo.jsx";
import { Link } from "react-router-dom";
import { authed, logout } from "../../../httpService/user";
import { useDispatch, useSelector } from "react-redux";
import { UiActions } from "../../../store/Ui/index.js";
import { search } from "../../../httpService/artists.js";
import "./navbar.css";
const Navbar = () => {
  const { FilterSelectedArtists } = useSelector((state) => state.Artists);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [Focus, setFocus] = useState(false);
  const dispatch = useDispatch();
  const onHandleLogout = () => {
    const result = logout();
    if (result) window.location.href = "/home";
  };
  const onHandleSearch = async (text) => {
    setSearchValue(text);
    if (text.length % 2 === 0) {
      let result = await search(text);
      if (result) setSearchResult(result.artists);
    }
  };
  const setModal = () => {
    dispatch(
      UiActions.onChangeModel([{ element: "modalName", value: "cart" }])
    );
  };
  return (
    <nav className="navbar navbar-dark bg-faded navbar-expand-lg">
      <div className="container-fluid">
        <a
          href="/"
          className="navbar-brand router-link-exact-active router-link-active"
          target="_self"
        >
          <Logo width="200" height="22" />
        </a>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-controls="navcollapse"
          aria-expanded="false"
          className="navbar-toggler"
          data-target="#navcollapse"
          data-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navcollapse"
          className="collapse navbar-collapse justify-content-end"
        >
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="navbar-text p-0 pr-2">
              <div data-v-36959b50="" className="global-search">
                <div data-v-36959b50="" className="search-input-container">
                  <input
                    data-v-36959b50=""
                    type="text"
                    autoComplete="off"
                    className="border-0 form-control"
                    id="__BVID__12"
                    value={searchValue}
                    onChange={(e) => onHandleSearch(e.target.value)}
                    onBlur={() => setFocus(false)}
                    onFocus={() => setFocus(true)}
                  />
                  <svg
                    data-v-36959b50=""
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
                    <g data-v-36959b50="">
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
                    data-v-36959b50=""
                    aria-hidden="true"
                    className="search-icon spinner-border spinner-border-sm text-light"
                    style={{ display: "none" }}
                  ></span>
                </div>
                {Focus && (
                  <div data-v-36959b50="" className="results-container">
                    {searchValue.length > 0 &&
                    searchResult &&
                    searchResult.length > 0 ? (
                      <>
                        <div className="search-results">
                          {searchResult?.map((item, index) => (
                            <div
                              onClick={() => {
                                window.location.href = `/artist/${item?.id}`;
                              }}
                              key={index}
                              className="result-artist border-bottom-primary router-link-exact-active router-link-active"
                            >
                              <h5 className="m-0">{item?.name}</h5>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div data-v-36959b50="" className="search-tip">
                        Search by name or category (ie: solo, violin, acoustic,
                        band, etc..)
                      </div>
                    )}
                  </div>
                )}
              </div>
            </li>
            {authed() ? (
              <li className="nav-item dropdown">
                <Link
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="profile"
                >
                  Ezat Elzalouy
                </Link>
                <ul className="dropdown-menu" aria-labelledby="profile">
                  <li role="presentation">
                    <Link
                      to="#"
                      role="menuitem"
                      href="http://entertainme.co/logout"
                      className="dropdown-item"
                      onClick={() => onHandleLogout()}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link target="_self" to="/LogIn" className="nav-link">
                  Login
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/categories" className="nav-link" target="_self">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link" target="_self">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#about-us" className="nav-link" target="_self">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactUs" className="nav-link" target="_self">
                Contact Us
              </Link>
            </li>
            <li
              data-count={
                FilterSelectedArtists?.length
                  ? FilterSelectedArtists?.length
                  : 0
              }
              className="nav-item cart-icon"
              data-toggle="modal"
              data-target="#cart-modal"
              onClick={() => setModal()}
            >
              <Link target="_self" to="" className="nav-link">
                <svg
                  aria-hidden="true"
                  width="16"
                  height="14.222222222222221"
                  viewBox="0 0 576 512"
                  focusable="false"
                  className="fa-icon"
                >
                  <g>
                    <path d="M528.1 301.3c-2.5 10.9-12.2 18.7-23.4 18.7h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-15.7 6.4-29.8 16.8-40h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-20.8 11.3-38.9 28.1-48.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3z"></path>
                  </g>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
