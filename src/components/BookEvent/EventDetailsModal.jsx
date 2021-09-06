import React from 'react';
const EventDetailsModal = ({onHandleChange}) => {
    return ( 
        <div
        id="booking-modal"
        className="modal-body book-modal-body border border-normal"
      >
        <div id="booking-form-popup">
          <form>
            <div className="booking-steps">
              <div className="booking-step">
                <fieldset className="form-group" id="__BVID__475">
                  <div tabIndex="-1" role="group" className="bv-no-focus-ring">
                    <textarea
                      name="production_items"
                      placeholder="What type of entertainment are you looking for? (please tell us anything that would assist us in selecting the best options for you)"
                      required="required"
                      rows="2"
                      wrap="soft"
                      aria-required="true"
                      className="bg-transparent border border-dark rounded-0 form-control"
                      id="__BVID__476"
                    ></textarea>
                  </div>
                </fieldset>{" "}
                <div className="additional-services my-3">
                  <p className="text-normal font-noto-m">Additional Services</p>{" "}
                  <div className="form-row border border-dark p-3">
                    <div className="col-md-3 col-6">
                      <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                        <input
                          type="checkbox"
                          name="additional_equipment[]"
                          autoComplete="off"
                          className="custom-control-input"
                          value="item"
                          id="__BVID__477"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__477">
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
                          id="__BVID__478"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__478">
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
                          id="__BVID__479"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__479">
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
                          id="__BVID__480"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__480">
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
                          id="__BVID__481"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__481">
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
                          id="__BVID__482"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__482">
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
                          id="__BVID__483"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__483">
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
                          id="__BVID__484"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__484">
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
                          id="__BVID__485"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__485">
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
                          id="__BVID__486"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__486">
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
                          id="__BVID__487"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__487">
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
                          id="__BVID__488"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__488">
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
                          id="__BVID__489"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__489">
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
                          id="__BVID__490"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__490">
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
                          id="__BVID__491"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__491">
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
                          id="__BVID__492"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__492">
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
                          id="__BVID__493"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__493">
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
                          id="__BVID__494"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__494">
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
                          id="__BVID__495"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__495">
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
                          id="__BVID__496"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__496">
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
                          id="__BVID__497"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__497">
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
                          id="__BVID__498"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__498">
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
                          id="__BVID__499"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__499">
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
                          id="__BVID__500"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__500">
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
                          id="__BVID__501"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__501">
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
                          id="__BVID__502"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__502">
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
                          id="__BVID__503"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__503">
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
                          id="__BVID__504"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__504">
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
                          id="__BVID__505"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__505">
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
                          id="__BVID__506"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__506">
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
                          id="__BVID__507"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__507">
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
                          id="__BVID__508"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__508">
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
                          id="__BVID__509"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__509">
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
                          id="__BVID__510"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__510">
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
                          id="__BVID__511"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__511">
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
                          id="__BVID__512"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__512">
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
                          id="__BVID__513"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__513">
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
                          id="__BVID__514"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__514">
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
                          id="__BVID__515"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__515">
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
                          id="__BVID__516"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__516">
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
                          id="__BVID__517"
                        />
                        <label className="custom-control-label" htmlFor="__BVID__517">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="booking-step second-step" >
                <fieldset className="form-group" id="__BVID__518">
                  <div tabIndex="-1" role="group" className="bv-no-focus-ring">
                    <p className="font-noto-m text-normal mb-2">Event Details</p>{" "}
                    <input
                      name="name"
                      type="text"
                      placeholder="Event Name.."
                      required="required"
                      aria-required="true"
                      className="bg-transparent border border-dark rounded-0 form-control"
                      id="__BVID__519"
                    />
                  </div>
                </fieldset>{" "}
                <fieldset className="form-group" id="__BVID__520">
                  <div tabIndex="-1" role="group" className="bv-no-focus-ring">
                    <input
                      name="address"
                      type="text"
                      placeholder="Event Address.."
                      required="required"
                      aria-required="true"
                      className="bg-transparent border border-dark rounded-0 form-control"
                      id="__BVID__521"
                    />
                  </div>
                </fieldset>{" "}
                <fieldset className="form-group" id="__BVID__522">
                  <div tabIndex="-1" role="group" className="bv-no-focus-ring">
                    <input
                      name="description"
                      type="text"
                      placeholder="Event Description.."
                      required="required"
                      aria-required="true"
                      className="bg-transparent border border-dark rounded-0 form-control"
                      id="__BVID__523"
                    />
                  </div>
                </fieldset>{" "}
                <div className="form-row mb-2">
                  <div className="col-4">
                    <p className="font-noto-m text-normal mb-2">Event Date</p>{" "}
                    <div
                      role="group"
                      className="dropdown b-form-datepicker date-field text-muted border-dark border rounded-0 bg-transparent b-form-btn-label-control form-control d-flex p-0 h-auto align-items-stretch"
                      type="text"
                      id="__BVID__524__outer_"
                      lang="en"
                      aria-labelledby="__BVID__524__value_"
                    >
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        className="btn border-0 h-auto py-0"
                        id="__BVID__524"
                      ></button>
                      <input type="hidden" name="date" value="" />
                      <div
                        role="dialog"
                        tabIndex="-1"
                        aria-modal="false"
                        className="dropdown-menu p-2 bg-dark text-light"
                        id="__BVID__524__dialog_"
                        aria-labelledby="__BVID__524__value_"
                      ></div>
                      <label
                        
                        aria-required="true"
                        className="form-control text-break text-wrap border-0 bg-transparent h-auto pl-1 m-0 text-muted"
                        id="__BVID__524__value_"
                        htmlFor="__BVID__524"
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
                      id="__BVID__527"
                    />
                  </div>{" "}
                  <div className="d-flex align-items-end justify-content-center col-4">
                    <div
                      role="radiogroup"
                      tabIndex="-1"
                      aria-required="true"
                      className="font-noto-m text-normal bv-no-focus-ring"
                      id="__BVID__528"
                    >
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          name="placement"
                          required="required"
                          autoComplete="off"
                          className="custom-control-input"
                          value="indoor"
                          id="__BVID__528__BV_option_0_"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="__BVID__528__BV_option_0_"
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
                          id="__BVID__528__BV_option_1_"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="__BVID__528__BV_option_1_"
                        >
                          <span>Outdoor</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="form-row">
                  <div className="col-4">
                    <p className="font-noto-m text-normal">Performing Hours</p>{" "}
                    <input
                      name="performing_hours"
                      type="text"
                      required="required"
                      aria-required="true"
                      className="border-dark text-muted border rounded-0 bg-transparent form-control"
                      maxLength="7"
                      id="__BVID__531"
                    />{" "}
                    <div className="text-normal font-noto-m custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="duration_tbd"
                        autoComplete="off"
                        className="custom-control-input"
                        value="true"
                        id="__BVID__532"
                      />
                      <label className="custom-control-label" htmlFor="__BVID__532">
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
                        id="__BVID__533"
                      />
                    </div>{" "}
                    <div className="text-normal font-noto-m custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="budget_tbd"
                        autoComplete="off"
                        className="custom-control-input"
                        value="true"
                        id="__BVID__534"
                      />
                      <label className="custom-control-label" htmlFor="__BVID__534">
                        TBD?
                      </label>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="booking-step">
                <fieldset className="form-group" id="__BVID__535">
                  <div tabIndex="-1" role="group" className="bv-no-focus-ring">
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
                      id="__BVID__536"
                    />
                  </div>
                </fieldset>{" "}
                <fieldset className="form-group" id="__BVID__537">
                  <div tabIndex="-1" role="group" className="bv-no-focus-ring">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address.."
                      required="required"
                      aria-required="true"
                      className="bg-transparent border text-muted border-dark rounded-0 form-control"
                      id="__BVID__538"
                    />
                  </div>
                </fieldset>{" "}
                <fieldset className="form-group" id="__BVID__539">
                  <div tabIndex="-1" role="group" className="bv-no-focus-ring">
                    <input
                      name="phone_number"
                      type="text"
                      placeholder="Phone Number.."
                      required="required"
                      aria-required="true"
                      className="bg-transparent border text-muted border-dark rounded-0 form-control"
                      id="__BVID__540"
                    />
                  </div>
                </fieldset>
                <fieldset className="form-group" id="__BVID__541">
                  <div tabIndex="-1" role="group" className="bv-no-focus-ring">
                    <input
                      name="additonal_info"
                      type="text"
                      placeholder="Additional Info.."
                      className="bg-transparent border text-muted border-dark rounded-0 form-control"
                      id="__BVID__542"
                    />
                  </div>
                </fieldset>
              </div>{" "}
              <div className="flex-center mt-3">
                <button
                  type="button"
                  className="btn d-block font-noto px-5 mr-3 btn-normal btn-lg rounded-pill"
                  onClick={()=>onHandleChange(0)}
                >
                  Previous
                </button>{" "}
                <div className="b-overlay-wrap position-relative">
                  <button
                    type="submit"
                    className="btn mx-auto d-block font-noto px-5 btn-normal btn-lg rounded-pill"
                    onClick={()=>onHandleChange(3)}
                  >
                    Next
                  </button>
                </div>
              </div>{" "}
            </div>
          </form>{" "}
          <div className="steps-buttons">
            <div className="step-button"></div>
            <div className="step-button bg-normal"></div>
            <div className="step-button"></div>
          </div>
        </div>
      </div>
     );
}
 
export default EventDetailsModal;