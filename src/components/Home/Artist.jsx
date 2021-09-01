import React from 'react';

const Artist = (props) => {
    return ( 
        <React.Fragment>
            <div
            className="swiper-slide featured-artist swiper-slide-duplicate"
            data-swiper-slide-index="0"
            style={{backgroundImage : `url(${})`, marginRight: '10px'}}
            >
            <div className="artist-info">
              <h2 className="font-noto text-primary">AL-Sharif</h2>{" "}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="artist-description text-white m-0">
                  Purveyor of deep, infectious dance grooves and a feel-good atmosphere!
                </p>{" "}
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                  focusable="false"
                  role="img"
                  alt="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi-triangle-fill triangle b-icon bi text-primary"
                  style="font-size: 300%;"
                  >
                  <g>
                    <path
                      fill-rule="evenodd"
                      d="M9.022 3.566a1.13 1.13 0 011.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H3.144c-.889 0-1.437-.99-.98-1.767L9.022 3.566z"
                      clip-rule="evenodd"
                      ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
                      </React.Fragment>
     );
}
 
export default Artist;