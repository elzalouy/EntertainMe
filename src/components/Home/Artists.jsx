import React from "react";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import artistImg from '../../assets/artist.png';
const Artists = () => {
  const artists = [
    {
      artist_name: "AL-Sharif",
      artist_description:
        "Purveyor of deep, infectious dance grooves and a feel-good atmosphere!",
      image: "/src/assets/artist.png",
      className: "",
    },
    {
      artist_name: "Hassan Ramzy",
      artist_description:
        "Hassan Ramzy is a growing Egyptian musician who mainly plays guitar an...",
      image: "/src/assets/artist.png",
      className: "",
    },
    {
      artist_name: "Khaled El Agaty",
      artist_description:
        "Khaled El Agaty was raised in a musical atmosphere and it grew in him ...",
      image: "/src/assets/artist.png",
      className: "",
    },
    {
      artist_name: "Funk OFF",
      artist_description:
        "Funk Off is a funk, disco, blues, rock and pop band based in Cairo, Eg...",
      className: "swiper-slide-duplicate-prev",
      image: "/src/assets/artist.png",

    },
    {
      artist_name: "Abyusif",
      artist_description:
        " Rapper/Producer Youssef Altay (aka Abyusif) is a bit of a favourite of...",
      className: "swiper-slide-duplicate-active",
      image: "/src/assets/artist.png",

    },
    {
      artist_name: "Omar Etman",
      artist_description:
        "A local songwriter/busker from Cairo,Egypt, known for his knack for im...",
      className: "swiper-slide-duplicate-next",
      image: "/src/assets/artist.png",

    },
    {
      artist_name: "Abo El Anwar",
      artist_description:
        "Abo El Anwar, based in Cairo, Egypt. He has been rapping since his ea...",
        image: "/src/assets/artist.png",
        className: "",
    },
  ];
  return (
    <section id="featured-artists">
      <h1 className="font-noto text-primary ml-3">
        Featured Artists{" "}
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
          focusable="false"
          role="img"
          alt="icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi-triangle-fill b-icon bi"
        >
          <g transform="translate(10 10) rotate(90) translate(-10 -10)">
            <path
              fillRule="evenodd"
              d="M9.022 3.566a1.13 1.13 0 011.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H3.144c-.889 0-1.437-.99-.98-1.767L9.022 3.566z"
              clipRule="evenodd"
            ></path>
          </g>
        </svg>
      </h1>
      <div className="swiper swiper-container swiper-container-initialized swiper-container-horizontal">
        <div className="swiper-wrapper">
          {artists.map((item) => {
            return (
              <div
              key={(artists.indexOf(item)+1).toString()}
              className="swiper-slide featured-artist"
              data-swiper-slide-index={(artists.indexOf(item)+1).toString()}
              style={{
                backgroundImage:`url(${artistImg})`,
                marginRight: "10px",
                }}
                >
                <div className="artist-info">
                  <h2 className="font-noto text-primary">Hassan Ramzy</h2>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="artist-description text-white m-0">
                      Hassan Ramzy is a growing Egyptian musician who mainly
                      plays guitar an...
                    </p>
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
                      style={{fontSize: '300%'}}
                      >
                      <g>
                        <path
                          fillRule="evenodd"
                          d="M9.022 3.566a1.13 1.13 0 011.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H3.144c-.889 0-1.437-.99-.98-1.767L9.022 3.566z"
                          clipRule="evenodd"
                          ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
                <div className="swiper-pagination"></div>
        {/* <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span> */}
      </div>
    </section>
  );
};

export default Artists;
