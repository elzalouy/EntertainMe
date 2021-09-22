import React from "react";
import BookEvent from "../BookEvent/BookEvent";
import AboutUs from "./AboutUs";
import Artists from "./Artists";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-page">
        <div className="home-hero-container container-fluid">
          <div className="row h-100 align-items-center">
            <div className="flex-center col-md-6">
              <div
                id="start-journy"
                className="d-flex flex-column">
                <h1 className="text-white font-noto">START YOUR JOURNEY</h1>{" "}
                <p className="text-white mt-3 font-weight-bold">
                  It is difficult to plan an event when you’re not sure where to
                  book the entertainment, or where to find the musicians,
                  comedians, or even magicians. Click here, and choose from the
                  several entertainment options below! with a couple of simple
                  steps, you can watch your event come to life, hassle free!
                </p>{" "}
                <a
                  href="/categories"
                  className="btn lets-go font-noto text-primary btn-light rounded-0"
                  target="_self"
                >
                  Let's go
                </a>
              </div>
            </div>{" "}
            <div className="flex-center col-md-6">
              <div id="letus-do-thework" className="d-flex flex-column">
                <h1 className="text-white font-noto">
                  LET US DO THE WORK FOR YOU
                </h1>{" "}
                <p className="text-white mt-3 font-weight-bold">
                  Do you have an event you’re aspiring to create but aren’t sure
                  where to begin? Using two simple steps, our representatives
                  will find the best accessible and reasonable options for you
                  starting from location, venue, entertainment and the budget
                  you’re willing to spend. Start your journey here, sit back and
                  relax and we’ll do the work for you.
                </p>{" "}
                <button
                  type="button"
                  className="btn lets-go font-noto text-primary btn-light rounded-0"
                  data-toggle="modal" data-target="#booking-modal"
                >
                  Let's go
                </button>
              </div>
            </div>
          </div>
        </div>
        <Artists/>
        <AboutUs />
        <BookEvent/>
      </div>
    </React.Fragment>
  );
};
export default Home;
