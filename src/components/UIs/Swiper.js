import React from 'react';
import Swiper from "swiper/swiper-bundle.esm.browser";
const AppSwiper = ({children}) => {
    const MySwiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    return (
        <React.Fragment>
        <div className="swiper swiper-container MySwiper">
        {children}
        </div>
        </React.Fragment>
     );
}
export default AppSwiper;