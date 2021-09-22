import React from "react";

const ServicesModal = ({onHandleChange}) => {
  return (
    
      <form>
        <div className="booking-steps">
          <div className="booking-step">
            <fieldset className="form-group" id="__BVID__231">
              <div role="group" className="bv-no-focus-ring">
                <textarea
                  name="production_items"
                  placeholder="What type of entertainment are you looking for? (please tell us anything that would assist us in selecting the best options for you)"
                  required="required"
                  rows="2"
                  wrap="soft"
                  aria-required="true"
                  className="bg-transparent border border-dark rounded-0 form-control"
                  id="__BVID__232"
                ></textarea>
              </div>
            </fieldset>{" "}
            <div className="additional-services my-3">
              <p className="text-normal font-noto-m">
                Additional Services
              </p>{" "}
              <div className="form-row border border-dark p-3">
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__233"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__233"
                    >
                      {" "}
                      Sound{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__234"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__234"
                    >
                      {" "}
                      Led Screens{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__235"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__235"
                    >
                      {" "}
                      Stage Management{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__236"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__236"
                    >
                      {" "}
                      Ushers{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__237"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__237"
                    >
                      {" "}
                      Permits{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__238"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__238"
                    >
                      {" "}
                      Venu Rental{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__239"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__239"
                    >
                      {" "}
                      Location Renting{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__240"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__240"
                    >
                      {" "}
                      Walkie Talkies{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__241"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__241"
                    >
                      {" "}
                      Light{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__242"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__242"
                    >
                      {" "}
                      Mojo Barriers{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__243"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__243"
                    >
                      {" "}
                      Photography{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__244"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__244"
                    >
                      {" "}
                      Security{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__245"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__245"
                    >
                      {" "}
                      Social Media Coverage{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__246"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__246"
                    >
                      {" "}
                      Catering{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__247"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__247"
                    >
                      {" "}
                      AR (Augmented Reality){" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__248"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__248"
                    >
                      {" "}
                      Other{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__249"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__249"
                    >
                      {" "}
                      Stage{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__250"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__250"
                    >
                      {" "}
                      Generators{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__251"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__251"
                    >
                      {" "}
                      Videography{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__252"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__252"
                    >
                      {" "}
                      On Ground Operations Team{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__253"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__253"
                    >
                      {" "}
                      Seating arrangements{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__254"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__254"
                    >
                      {" "}
                      VR (Virtual Reality){" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="item"
                      id="__BVID__255"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__255"
                    >
                      {" "}
                      3D Mapping{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="additional-services my-3">
              <p className="text-normal font-noto-m">Production</p>{" "}
              <div className="form-row border border-dark p-3">
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Counters/Desk"
                      id="__BVID__256"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__256"
                    >
                      Counters/Desk
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Trusses"
                      id="__BVID__257"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__257"
                    >
                      Trusses
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Flags"
                      id="__BVID__258"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__258"
                    >
                      Flags
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Uniforms"
                      id="__BVID__259"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__259"
                    >
                      Uniforms
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Flyers"
                      id="__BVID__260"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__260"
                    >
                      Flyers
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Brochures"
                      id="__BVID__261"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__261"
                    >
                      Brochures
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Booths"
                      id="__BVID__262"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__262"
                    >
                      Booths
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Backdrop"
                      id="__BVID__263"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__263"
                    >
                      Backdrop
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Decorations"
                      id="__BVID__264"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__264"
                    >
                      Decorations
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Branded Car/Truck"
                      id="__BVID__265"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__265"
                    >
                      Branded Car/Truck
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Directional Signs"
                      id="__BVID__266"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__266"
                    >
                      Directional Signs
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Giveaways"
                      id="__BVID__267"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__267"
                    >
                      Giveaways
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Gate"
                      id="__BVID__268"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__268"
                    >
                      Gate
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Mockups"
                      id="__BVID__269"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__269"
                    >
                      Mockups
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Bracelets"
                      id="__BVID__270"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__270"
                    >
                      Bracelets
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Banners"
                      id="__BVID__271"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__271"
                    >
                      Banners
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Printed Invitations"
                      id="__BVID__272"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__272"
                    >
                      Printed Invitations
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                    <input
                      type="checkbox"
                      name="additional_equipment[]"
                      autoComplete="off"
                      className="custom-control-input"
                      value="Other"
                      id="__BVID__273"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__273"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="booking-step second-step"
            style={{ display: "none" }}
          >
            <fieldset className="form-group" id="__BVID__274">
              <div
                tabIndex="-1"
                role="group"
                className="bv-no-focus-ring"
              >
                <p className="font-noto-m text-normal mb-2">
                  Event Details
                </p>{" "}
                <input
                  name="name"
                  type="text"
                  placeholder="Event Name.."
                  required="required"
                  aria-required="true"
                  className="bg-transparent border border-dark rounded-0 form-control"
                  id="__BVID__275"
                />
              </div>
            </fieldset>{" "}
            <fieldset className="form-group" id="__BVID__276">
              <div
                tabIndex="-1"
                role="group"
                className="bv-no-focus-ring"
              >
                <input
                  name="address"
                  type="text"
                  placeholder="Event Address.."
                  required="required"
                  aria-required="true"
                  className="bg-transparent border border-dark rounded-0 form-control"
                  id="__BVID__277"
                />
              </div>
            </fieldset>{" "}
            <fieldset className="form-group" id="__BVID__278">
              <div
                tabIndex="-1"
                role="group"
                className="bv-no-focus-ring"
              >
                <input
                  name="description"
                  type="text"
                  placeholder="Event Description.."
                  required="required"
                  aria-required="true"
                  className="bg-transparent border border-dark rounded-0 form-control"
                  id="__BVID__279"
                />
              </div>
            </fieldset>{" "}
            <div className="form-row mb-2">
              <div className="col-4">
                <p className="font-noto-m text-normal mb-2">
                  Event Date
                </p>{" "}
                <div
                  role="group"
                  className="dropdown b-form-datepicker date-field text-muted border-dark border rounded-0 bg-transparent b-form-btn-label-control form-control d-flex p-0 h-auto align-items-stretch"
                  type="text"
                  id="__BVID__280__outer_"
                  lang="en"
                  aria-labelledby="__BVID__280__value_"
                >
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    className="btn border-0 h-auto py-0"
                    id="__BVID__280"
                  ></button>
                  <input type="hidden" name="date" value="" />
                  <div
                    role="dialog"
                    tabIndex="-1"
                    aria-modal="false"
                    className="dropdown-menu p-2 bg-dark text-light"
                    id="__BVID__280__dialog_"
                    aria-labelledby="__BVID__280__value_"
                  ></div>
                  <label
                    aria-required="true"
                    className="form-control text-break text-wrap border-0 bg-transparent h-auto pl-1 m-0 text-muted"
                    id="__BVID__280__value_"
                    htmlFor="__BVID__280"
                  ></label>
                </div>
              </div>{" "}
              <div className="col-4">
                <p className="font-noto-m text-normal mb-2">
                  Number of guests
                </p>{" "}
                <input
                  name="guests"
                  type="text"
                  required="required"
                  aria-required="true"
                  className="border-dark border rounded-0 bg-transparent text-muted form-control"
                  maxLength="7"
                  id="__BVID__283"
                />
              </div>{" "}
              <div className="d-flex align-items-end justify-content-center col-4">
                <div
                  role="radiogroup"
                  tabIndex="-1"
                  aria-required="true"
                  className="font-noto-m text-normal bv-no-focus-ring"
                  id="__BVID__284"
                >
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      name="placement"
                      autoComplete="off"
                      className="custom-control-input"
                      value="indoor"
                      id="__BVID__284__BV_option_0_"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__284__BV_option_0_"
                    >
                      <span>Indoor</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      name="placement"
                      required="required"
                      autoComplete="off"
                      className="custom-control-input"
                      value="outdoor"
                      id="__BVID__284__BV_option_1_"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="__BVID__284__BV_option_1_"
                    >
                      <span>Outdoor</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="form-row">
              <div className="col-4">
                <p className="font-noto-m text-normal">
                  Performing Hours
                </p>{" "}
                <input
                  name="performing_hours"
                  type="text"
                  required="required"
                  aria-required="true"
                  className="border-dark text-muted border rounded-0 bg-transparent form-control"
                  maxLength="7"
                  id="__BVID__287"
                />{" "}
                <div className="text-normal font-noto-m custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    name="duration_tbd"
                    autoComplete="off"
                    className="custom-control-input"
                    value="true"
                    id="__BVID__288"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="__BVID__288"
                  >
                    TBD?
                  </label>
                </div>
              </div>{" "}
              <div className="col-4">
                <p className="font-noto-m text-normal">Budget</p>{" "}
                <div className="budget-field">
                  <input
                    name="budget"
                    type="text"
                    required="required"
                    aria-required="true"
                    className="border-dark text-muted border rounded-0 bg-transparent form-control"
                    maxLength="7"
                    id="__BVID__289"
                  />
                </div>{" "}
                <div className="text-normal font-noto-m custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    name="budget_tbd"
                    autoComplete="off"
                    className="custom-control-input"
                    value="true"
                    id="__BVID__290"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="__BVID__290"
                  >
                    TBD?
                  </label>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="booking-step" style={{ display: "none" }}>
            <fieldset className="form-group" id="__BVID__291">
              <div
                tabIndex="-1"
                role="group"
                className="bv-no-focus-ring"
              >
                <p className="font-noto-m text-normal mb-2">
                  Contact Infromation
                </p>{" "}
                <input
                  name="name"
                  type="text"
                  placeholder="Name.."
                  required="required"
                  aria-required="true"
                  className="bg-transparent border text-muted border-dark rounded-0 form-control"
                  id="__BVID__292"
                />
              </div>
            </fieldset>{" "}
            <fieldset className="form-group" id="__BVID__293">
              <div
                tabIndex="-1"
                role="group"
                className="bv-no-focus-ring"
              >
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address.."
                  required="required"
                  aria-required="true"
                  className="bg-transparent border text-muted border-dark rounded-0 form-control"
                  id="__BVID__294"
                />
              </div>
            </fieldset>{" "}
            <fieldset className="form-group" id="__BVID__295">
              <div
                tabIndex="-1"
                role="group"
                className="bv-no-focus-ring"
              >
                <input
                  name="phone_number"
                  type="text"
                  placeholder="Phone Number.."
                  required="required"
                  aria-required="true"
                  className="bg-transparent border text-muted border-dark rounded-0 form-control"
                  id="__BVID__296"
                />
              </div>
            </fieldset>{" "}
            <fieldset className="form-group" id="__BVID__297">
              <div
                tabIndex="-1"
                role="group"
                className="bv-no-focus-ring"
              >
                <input
                  name="additonal_info"
                  type="text"
                  placeholder="Additional Info.."
                  className="bg-transparent border text-muted border-dark rounded-0 form-control"
                  id="__BVID__298"
                />
              </div>
            </fieldset>
          </div>{" "}
          <div className="flex-center mt-3">
            {" "}
            <div className="b-overlay-wrap position-relative">
              <button
                type="submit"
                className="btn mx-auto d-block font-noto px-5 btn-normal btn-lg rounded-pill"
                onClick={()=>onHandleChange(0)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
              
  );
};

export default ServicesModal;
