import React from "react";
// note : Don't change swiper version until check if the new version is working with others correctly
import {Swiper,SwiperSlide} from 'swiper/react';
import artistImg from '../../assets/artist.png';
import artistImg1 from '../../assets/artist1.png';
import artistImg2 from '../../assets/artist2.png';
const Artists = () => {
    const artists = [
    {
      artist_name: "AL-Sharif",
      artist_description:
        "Purveyor of deep, infectious dance grooves and a feel-good atmosphere!",
      image: artistImg,
    },
    {
      artist_name: "Hassan Ramzy",
      artist_description:
        "Hassan Ramzy is a growing Egyptian musician who mainly plays guitar an...",
      image: artistImg1,
    },
    {
      artist_name: "Khaled El Agaty",
      artist_description:
        "Khaled El Agaty was raised in a musical atmosphere and it grew in him ...",
      image: artistImg2,
      className: "",
    },
    {
      artist_name: "Funk OFF",
      artist_description:
        "Funk Off is a funk, disco, blues, rock and pop band based in Cairo, Eg...",
      image: artistImg2,
    },
    {
      artist_name: "Abyusif",
      artist_description:
        " Rapper/Producer Youssef Altay (aka Abyusif) is a bit of a favourite of...",
      image: artistImg2,
    },
    {
      artist_name: "Omar Etman",
      artist_description:
        "A local songwriter/busker from Cairo,Egypt, known for his knack for im...",
      image: artistImg2,
    },
    {
      artist_name: "Abo El Anwar",
      artist_description:
        "Abo El Anwar, based in Cairo, Egypt. He has been rapping since his ea...",
      image:  artistImg2,
    },
  ];
  return (
    <section id="featured-artists">
      <h1 className="font-noto text-normal ml-3">
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
      <Swiper autoplay={true} slidesPerView={5} spaceBetween={10}
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1
          },
        }}
      >
        <div className="swiper-wrapper" >
          {artists.map((item,index) => {
            console.log(item.image)
            return (
              <SwiperSlide  key={index.toString()} virtualIndex={index} className='featured-artist text-normal' 
              style={{
                backgroundImage: `url(${item.image})`,
                marginRight: "10px",
              }}>
                  <div className="artist-info">
                    <h2 className="font-noto text-normal">{item.artist_name}</h2>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="artist-description text-white m-0">
                        {item.artist_description}
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
                        className="bi-triangle-fill triangle b-icon bi text-normal"
                        style={{ fontSize: "300%" }}
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
              </SwiperSlide>
            );
          })}
        </div>
        <div className="swiper-pagination"></div>
        {/* <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span> */}
      </Swiper>
    </section>
  );
};

export default Artists;
