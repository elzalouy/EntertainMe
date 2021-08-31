import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div class="home-page">
        <div class="home-hero-container container-fluid">
          <div class="row h-100">
            <div class="flex-center col-md-6">
              <div
                id="start-journy"
                class="d-flex flex-column"
                style={{height:"291px"}}
              >
                <h1 class="text-white font-noto">START YOUR JOURNEY</h1>{" "}
                <p class="text-white mt-auto font-weight-bold">
                  It is difficult to plan an event when you’re not sure where to
                  book the entertainment, or where to find the musicians,
                  comedians, or even magicians. Click here, and choose from the
                  several entertainment options below! with a couple of simple
                  steps, you can watch your event come to life, hassle free!
                </p>{" "}
                <a
                  href="/categories"
                  class="btn lets-go font-noto text-primary btn-light rounded-0"
                  target="_self"
                >
                  Let's go
                </a>
              </div>
            </div>{" "}
            <div class="flex-center col-md-6">
              <div id="letus-do-thework" class="d-flex flex-column">
                <h1 class="text-white font-noto">LET US DO THE WORK FOR YOU</h1>{" "}
                <p class="text-white mt-3 font-weight-bold">
                  Do you have an event you’re aspiring to create but aren’t sure
                  where to begin? Using two simple steps, our representatives
                  will find the best accessible and reasonable options for you
                  starting from location, venue, entertainment and the budget
                  you’re willing to spend. Start your journey here, sit back and
                  relax and we’ll do the work for you.
                </p>{" "}
                <button
                  type="button"
                  class="btn lets-go font-noto text-primary btn-light rounded-0"
                >
                  Let's go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
