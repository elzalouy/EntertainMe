import React from "react";




import musician1 from '../../assets/foaG.png';
import slideImage1 from '../../assets/slideImage1.jpg';
import slideImage2 from '../../assets/slideImage2.jpg';
import slideImage3 from '../../assets/slideImage3.jpg';

const Artist = () => {   
    return (
        <main>
            <main id="single-artist-page">
                <div class="b-overlay-wrap position-relative">
                    <div class="py-3 container">
                        <div class="category-name d-flex text-white flex-wrap">
                            <a href="/categories" class="m-0 h3 font-noto text-decoration-none text-light">Categories</a> 
                            <div class="category-seprator d-flex align-items-end">
                                <span></span> <span></span> <span></span>
                            </div> 
                            <a href="/categories/3" class="font-noto m-0 h3 text-decoration-none text-light">Musicians</a> 
                            <div class="category-seprator d-flex align-items-end">
                                <span></span> <span></span> <span></span>
                            </div> 
                            <h3 class="font-noto m-0 text-normal">Brass Sound Band</h3>
                        </div> 
                        <div class="row mt-3">
                            <div class="col-md-4">
                                <div class="single-artist text-decoration-none">
                                    <div class="artist-info">
                                        <div class="artist-image">
                                        <img alt="1"  src={musician1} class=""/>
                                        </div>
                                    </div> 
                                    <div class="artist-actions mt-3 align-items-center">
                                        <div class="b-overlay-wrap position-relative ml-1" data-toggle="modal" data-target="#auth-required-modal">
                                            <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                                <g>
                                                    <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                                </g>
                                            </svg>
                                        </div> 
                                        <button type="button" class="btn h-100 ml-1 btn-normal btn-sm btn-block rounded-0">Add to Booking</button>
                                    </div>
                                </div> 
                                <h2 class="text-center mt-3 font-noto text-light">Brass Sound Band</h2>
                            </div> 
                            <div class="col-md-8">
                                <div class="card rounded-0 single-artist-about px-lg-3">
                                    <div class="card-body">
                                        <h3 class="text-normal font-noto">About</h3> 
                                        <p class="text-light font-noto-m">Do you love music ? Do you love crazy mode ?! Well brass sound gives you both</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class="row mt-2">
                            <div class="col-md-2">
                                <h5 class="text-normal font-noto-m works-section-title"><span></span>
                                Videos</h5>
                            </div> 
                            <div class="col-md-10">
                                <section class="artist-works">
                                    <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                                        <div class="swiper-wrapper">
                                            <div tag="div" class="swiper-slide swiper-slide-active"  style={{width:"920px", marginRight: "10px"}}>
                                                <div class="work-content">
                                                    <iframe title="1" width="560" height="315" src="https://www.youtube.com/embed/gho0l7pV-ek" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                                                </div>
                                            </div>
                                            <div tag="div" class="swiper-slide swiper-slide-next" style={{width:"920px", marginRight: "10px"}}>
                                                <div class="work-content">
                                                    <iframe title="2" width="560" height="315" src="https://www.youtube.com/embed/w0uf-Xgvkgk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div> 
                                        <div class="swiper-button-prev swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></div>
                                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-2">
                                <h5 class="text-normal font-noto-m works-section-title"><span></span>
                                Images</h5>
                            </div> 
                            <div class="col-md-10">
                                <section class="artist-works">
                                    <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                                        <div class="swiper-wrapper" style={{transform:"translate3d(0px, 0px, 0px)"}}>
                                            <div tag="div" class="swiper-slide swiper-slide-active" style={{width:"920px", marginRight: "10px"}}>
                                                <div class="work-content">
                                                    <img alt="2" src={slideImage1} class="img-fluid mx-auto d-block"/>
                                                </div>
                                            </div>
                                            <div tag="div" class="swiper-slide swiper-slide-next" style={{width:"920px", marginRight: "10px"}}>
                                                <div class="work-content">
                                                    <img alt="3" src={slideImage2} class="img-fluid mx-auto d-block"/>
                                                </div>
                                            </div>
                                            <div tag="div" class="swiper-slide" style={{width:"920px", marginRight: "10px"}}>
                                                <div class="work-content">
                                                    <img alt="4" src={slideImage3} class="img-fluid mx-auto d-block"/>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div> 
                                        <div class="swiper-button-prev swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></div>
                                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                    </div>
                                    
                                   
                                </section>
                            </div>
                        </div> 
                        <div class="row mt-2">
                            <div class="col-md-2">
                                <h5 class="text-normal font-noto-m works-section-title"><span></span>
                                Previous Events</h5>
                            </div> 
                            <div class="col-md-10">
                                <div class="card rounded-0 previous-events  h-100 px-lg-3">
                                    <div class="card-body">
                                        <div class="d-flex flex-wrap">
                                            <div class="mb-3 mr-3 text-light font-noto single-prev-event">
                                                <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-three-dots dots b-icon bi">
                                                    <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                                                        <path fill-rule="evenodd" d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"></path>
                                                    </g>
                                                </svg> 
                                                <span>Cairo Opera House</span>
                                            </div>
                                            <div class="mb-3 mr-3 text-light font-noto single-prev-event">
                                                <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-three-dots dots b-icon bi">
                                                    <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                                                        <path fill-rule="evenodd" d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"></path>
                                                    </g>
                                                </svg> 
                                                <span>Cairo University</span>
                                            </div>
                                            <div class="mb-3 mr-3 text-light font-noto single-prev-event">
                                                <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-three-dots dots b-icon bi">
                                                    <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                                                        <path fill-rule="evenodd" d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"></path>
                                                    </g>
                                                </svg> 
                                                <span>Misr University for Science Technology</span>
                                            </div>
                                            <div class="mb-3 mr-3 text-light font-noto single-prev-event">
                                                <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-three-dots dots b-icon bi">
                                                    <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                                                        <path fill-rule="evenodd" d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"></path>
                                                    </g>
                                                </svg> 
                                                <span>Cairo Opera House</span>
                                            </div>
                                            <div class="mb-3 mr-3 text-light font-noto single-prev-event">
                                                <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-three-dots dots b-icon bi">
                                                    <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                                                        <path fill-rule="evenodd" d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"></path>
                                                    </g>
                                                </svg> 
                                                <span>Cairo University</span>
                                            </div>
                                            <div class="mb-3 mr-3 text-light font-noto single-prev-event">
                                                <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-three-dots dots b-icon bi">
                                                    <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                                                        <path fill-rule="evenodd" d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"></path>
                                                    </g>
                                                </svg> 
                                                <span>Misr University for Science Technology</span>
                                            </div>
                                            <div class="mb-3 mr-3 text-light font-noto single-prev-event">
                                                <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-three-dots dots b-icon bi">
                                                    <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                                                        <path fill-rule="evenodd" d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"></path>
                                                    </g>
                                                </svg> 
                                                <span>Cairo Opera House</span>
                                            </div>
                                            <div class="mb-3 mr-3 text-light font-noto single-prev-event">
                                                <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-three-dots dots b-icon bi">
                                                    <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                                                        <path fill-rule="evenodd" d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"></path>
                                                    </g>
                                                </svg> 
                                                <span>Cairo University</span>
                                            </div>
                                            <div class="mb-3 mr-3 text-light font-noto single-prev-event">
                                                <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-three-dots dots b-icon bi">
                                                    <g transform="translate(10 10) scale(9 9) translate(-10 -10)">
                                                        <path fill-rule="evenodd" d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"></path>
                                                    </g>
                                                </svg> 
                                                <span>Misr University for Science Technology</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div id="auth-required-modal" class="modal fade">
                <div class="modal-dialog modal-md modal-dialog-centered">
                    <span tabindex="0"></span>
                    <div role="document" id="auth-required-modal___BV_modal_content_" tabindex="-1" class="modal-content">
                        <div id="auth-required-modal___BV_modal_body_" class="modal-body bg-dark text-light">
                            <div class="font-noto text-center h4">
                                <strong>Login</strong> required to do this action
                            </div>
                        </div>
                        <footer id="auth-required-modal___BV_modal_footer_" class="modal-footer bg-dark">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button> 
                            <a target="_self" href="/login" class="btn btn-normal">Login</a>
                        </footer>
                    </div>
                    <span tabindex="0"></span>
                </div>
            </div>
        </main>
    

    );
};
export default Artist;