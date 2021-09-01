import React, { Component } from "react";
import Logo from "../UIs/logo.jsx";
export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-faded navbar-expand-lg">
          <div className="container-fluid">
              <Logo width="150" height="100"/>
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-controls="nav-collapse"
              aria-expanded="false"
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              id="nav-collapse"
              className="navbar-collapse collapse"
              style={{ display: "none" }}
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
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    target="_self"
                    href="https://www.entertainme.co/login"
                    className="nav-link"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/categories" className="nav-link" target="_self">
                    Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/news" className="nav-link" target="_self">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#about-us" className="nav-link" target="_self">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link" target="_self">
                    Contact Us
                  </a>
                </li>
                <li data-count="0" className="nav-item cart-icon">
                  <a target="_self" href="#" className="nav-link">
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
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
