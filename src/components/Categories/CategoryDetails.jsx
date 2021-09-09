import React from "react";
import {Link, Route } from 'react-router-dom';

import musician1 from '../../assets/foaG.png';
import musician2 from '../../assets/AZqU.png';




const CategoryDetails = () => {
    const stopEvent = (event) =>  {
         event.stopPropagation();
         event.nativeEvent.stopImmediatePropagation();
    }
  return (
      
      <React.Fragment>

    <main>
         <main id="single-category-page">
            <div class="container">
                <div class="category-navbar d-flex justify-content-md-between justify-content-center mb-3 flex-wrap">
                    <div class="category-navbar-left">
                        <div class="category-name d-flex text-white">
                            <a href="/categories" class="m-0 font-noto h3 text-light text-decoration-none router-link-active">Categories</a> 
                            <div class="category-seprator d-flex align-items-end">
                                <span></span> <span></span> <span></span>
                            </div> 
                            <h3 class="font-noto m-0 text-normal">Musicians</h3>
                        </div> 
                        <div class="search mt-3">
                            <input type="text" class="border-0 form-control" id="__BVID__1017"/> 
                            <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-search search-icon b-icon bi text-light" style={{fontSize:"150%"}}>
                                <g>
                                    <path fill-rule="evenodd" d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path>
                                    <path fill-rule="evenodd" d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path>
                                </g>
                            </svg> 
                            <span aria-hidden="true" class="search-icon spinner-border spinner-border-sm text-light" style={{display:"none"}}></span>
                        </div>
                    </div> 
                    <div class="category-navbar-right text-normal flex-md-column flex-wrap flex-row mt-3">
                        <div class="category-filter-btns  border-normal d-flex mr-2">
                            <div class="text-center font-noto h5 p-1 px-3 m-0 bg-normal text-light"> Local</div> 
                            <div class="text-center font-noto h5 p-1 m-0"> Intenational</div>
                        </div> 
                        <div class="category-filter-btns  border-normal d-flex mt-3 mr-2">
                            <div class="text-center font-noto h5 p-1 m-0 px-2 bg-normal text-light">Alternative</div> 
                            <div class="text-center font-noto h5 p-1 m-0">Mainstream</div>
                        </div>
                    </div>
                </div> 
                <div class="b-overlay-wrap position-relative">
                    <div class="row">
                        <div class="mb-3 col-md-4 col-6">
                            <Link to="/artist" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician1} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m">
                                        Do you love music ? Do you love crazy mode ?! Well brass sou...
                                    </div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">Brass Sound Band</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1" onClick={stopEvent} data-toggle="modal" data-target="#auth-required-modal">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/257" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician1} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m">Shaabi artist and rapper who is known for his energetic mahr...</div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">Sadat</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/2" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician2} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m">Strawberry Swing is the first acknowledged Coldplay tribute ...</div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">Strawberry Swing</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/258" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician2} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m">The Walk Man Show is a musical project!</div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">The Walk Man Show</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/259" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician2} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m"> Flute with string instruments accompanied by rhythm, present...</div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light"> Flute &amp; Bow</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/5" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician2} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m"> Shaware3na is an Oriental Rock band. Their musical ideas and...</div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">Shaware3na Band</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}
                                        >
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/6" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician1} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m">Noha Fekry is an Egyptian singer/songwriter; her singing rep...</div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">Noha Fekry</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/7" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician1} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m">Started in 2009 with Egyunits Band as a new trial to make a ...</div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">Zig Zag</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/8" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician1} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m">Shereen Abdo is a young vocalist and a key figure in this em...</div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">Shereen Abdo</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/9" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician2} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m">
                                        Omar Kay, frontman of the Rock n' Roll cover band Bluezophre...
                                    </div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">Omar Kay</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/10" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician2} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m">Medhat Mamdouh was born at 13/2/1993 Played recorder at 14 y...</div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">Medhat Mamdouh</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}
                                        >
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/11" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician2} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m">LOOPERIA is a sound that comes from deep of Africa passing t...</div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">Looperia Project</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mb-3 col-md-4 col-6">
                            <a href="/artists/12" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician1} class=""/>
                                    </div> 
                                    <div class="artist-about font-noto-m">The band story start with : how could the band introduce the...</div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light"> Lel We Ain</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path></g></svg> <div class="b-overlay-wrap position-relative ml-1"><svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                                <g>
                                                    <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                                </g>
                                            </svg>
                                        </div></div>
                                        </a>
                        </div>  
                            <div class="mb-3 col-md-4 col-6">
                                <a href="/artists/676" class="category-artist text-decoration-none">
                                <div class="artist-info">
                                    <div class="artist-image">
                                        <img alt=""  src={musician1} class=""/>
                                    </div> 
                                <div class="artist-about font-noto-m">
                                    Abo El Anwar, based in Cairo, Egypt. He has been rapping si...
                                </div>
                                </div> 
                                <div class="artist-name my-2">
                                    <h5 class="m-0 font-noto text-light">Abo El Anwar</h5>
                                </div> 
                                <div class="artist-actions mt-1">
                                    <svg aria-hidden="true" width="36" height="32" viewBox="0 0 576 512" focusable="false" class="bg-normal p-1 action-icon fa-icon" style={{fontSize:"2.25em"}}>
                                        <g>
                                            <path d="M504.7 320h-293.1l6.5 32h268.4c15.4 0 26.8 14.3 23.4 29.3l-5.5 24.3c18.7 9.1 31.6 28.2 31.6 50.4 0 31.2-25.5 56.4-56.8 56-29.8-0.4-54.3-24.6-55.2-54.4-0.4-16.3 6.1-31 16.8-41.5h-209.6c10.4 10.2 16.8 24.3 16.8 40 0 31.8-26.5 57.4-58.7 55.9-28.5-1.3-51.8-24.4-53.3-52.9-1.2-22 10.4-41.5 28.1-51.6l-70.2-343.4h-69.9c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h102.5c11.4 0 21.2 8 23.5 19.2l9.2 44.8h392.8c15.4 0 26.8 14.3 23.4 29.3l-47.3 208c-2.5 10.9-12.2 18.7-23.4 18.7zM408 168h-48v-40c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v40h-48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v40c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
                                        </g>
                                    </svg> 
                                    <div class="b-overlay-wrap position-relative ml-1">
                                        <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-heart bg-normal p-1 action-icon b-icon bi" style={{fontSize:"225%"}}>
                                            <g>
                                                <path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        </main>
        {/* <div id="scrnli_recorder_root"></div>
        <iframe src="chrome-extension://ijejnggjjphlenbhmjhhgcdpehhacaal/audio-devices.html" allow="microphone" style={{display:"none"}}></iframe>
        <div data-v-20e3b604="" class="container_selected_area" style={{cursor:"url(&quot;chrome-extension://ijejnggjjphlenbhmjhhgcdpehhacaal/assets/images/cursor-imagen.svg&quot;) 9 9, crosshair;"}}>
            <div data-v-20e3b604="" class="area"></div>
        </div> */}
        {/* <div id="auth-required-modal___BV_modal_outer_" style={{position:"absolute", zIndex: "1040"}}> */}
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
                            <a target="_self" href="/login" class="btn btn-primary">Login</a>
                        </footer>
                    </div>
                    <span tabindex="0"></span>
                </div>
            </div>
            {/* <div id="auth-required-modal___BV_modal_backdrop_" class="modal-backdrop"></div> */}
        {/* </div> */}
      </React.Fragment>
  );
};

export default CategoryDetails;