import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { getFeaturedArtists } from "../../httpService/artists";
import { ArtistsActions } from "../../store/Artists";
import Empty from "../UIs/Empty";
import Artist from "./Artist";
const Artists = () => {
  const api = process.env.REACT_APP_IMAGE_URL;
  console.log(api);
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.Artists.featuredArtists);

  useEffect(() => {
    const fetch = async () => {
      dispatch(
        ArtistsActions.onChangeFeaturedArtists({
          data: await getFeaturedArtists(),
        })
      );
    };
    fetch();
  }, [dispatch]);

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
      {artists && artists.length > 0 ? (
        <Swiper spaceBetween={10} slidesPerView={"auto"}>
          <div className="swiper-wrapper">
            {artists.map((item, index) => {
              return (
                <SwiperSlide
                  key={index.toString()}
                  virtualIndex={index}
                  className="featured-artist text-normal"
                  style={{
                    backgroundImage: `url(${api + item.image_url})`,
                    marginRight: "10px",
                  }}
                  onClick={()=>{window.location.href=`/artist/${item.id}/${item.name}`}}
                >
                  <Artist item={item} />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      ) : (
        <Empty />
      )}
    </section>
  );
};

export default Artists;
