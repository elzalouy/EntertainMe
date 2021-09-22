import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const EventDetailsModal = ({onHandleChange}) => {
  const [date, setDate] = useState(new Date());


    return ( 
        
          <form>
            <div className="booking-steps">
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
                    <DatePicker className="dateInput bg-transparent border border-dark rounded-0 form-control" selected={date}  dateFormat="MM/dd/yyyy" 
                     onChange={(date) => setDate(date)} useWeekdaysShort={true}/>
                    {/* <div role="group"
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
                    </div> */}
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
          </form>
     );
}
 
export default EventDetailsModal;