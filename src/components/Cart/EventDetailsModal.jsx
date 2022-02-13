import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { EventsActions } from "../../store/Events";
const EventDetailsModal = ({ setModal }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.Events.cart);
  const [startDate, setStartDate] = useState(new Date());
  const onHandleChange = (e) => {
    if (e.target.type === "checkbox")
      dispatch(
        EventsActions.onHandleCart([
          {
            element: e.target.name,
            value: e.target.checked,
          },
        ])
      );
    else
      dispatch(
        EventsActions.onHandleCart([
          { element: e.target.name, value: e.target.value },
        ])
      );
  };
  const onHandleChangeDate = (value) => {
    setStartDate(value);
    dispatch(
      EventsActions.onHandleCart([{ element: "date", value: value.valueOf() }])
    );
  };
  return (
    <form>
      <div className="booking-steps">
        <div className="booking-step second-step">
          <fieldset className="form-group" id="__BVID__518">
            <div tabIndex="-1" role="group" className="bv-no-focus-ring">
              <p className="font-noto-m text-normal mb-2">Event Details</p>{" "}
              <input
                name="event_name"
                type="text"
                placeholder="Event Name.."
                required="required"
                aria-required="true"
                className="bg-transparent border border-dark rounded-0 form-control"
                value={cart?.event_name}
                onChange={onHandleChange}
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
                value={cart?.address}
                onChange={onHandleChange}
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
                value={cart?.description}
                onChange={onHandleChange}
              />
            </div>
          </fieldset>
          <div className="form-row mb-2">
            <div className="col-4">
              <p className="font-noto-m text-normal mb-2">Event Date</p>{" "}
              <DatePicker
                className="dateInput bg-transparent border border-dark rounded-0 form-control"
                selected={startDate}
                onChange={(e) => onHandleChangeDate(e)}
              />
            </div>
            <div className="col-4">
              <p className="font-noto-m text-normal mb-2">Number of guests</p>{" "}
              <input
                name="guests"
                type="text"
                required="required"
                aria-required="true"
                className="border-dark border rounded-0 bg-transparent text-muted form-control"
                maxLength="7"
                value={cart?.geusts}
                onChange={onHandleChange}
              />
            </div>{" "}
            <div className="d-flex align-items-end justify-content-center col-4">
              <div
                role="radiogroup"
                tabIndex="-1"
                aria-required="true"
                className="font-noto-m text-normal bv-no-focus-ring"
              >
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="placement"
                    required="required"
                    autoComplete="off"
                    className="custom-control-input"
                    value="indoor"
                    onChange={onHandleChange}
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
                    required="required"
                    autoComplete="off"
                    className="custom-control-input"
                    name="placement"
                    value="outdoor"
                    onChange={onHandleChange}
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
          </div>
          <div className="form-row">
            <div className="col-4">
              <p className="font-noto-m text-normal">Performing Hours</p>{" "}
              <input
                type="text"
                required="required"
                aria-required="true"
                className="border-dark text-muted border rounded-0 bg-transparent form-control"
                maxLength="7"
                name="duration"
                value={cart?.duration}
                onChange={onHandleChange}
              />{" "}
              <div className="text-normal font-noto-m custom-control custom-checkbox">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="__BVID__532"
                  name="duration_tbd"
                  checked={cart?.duration_tbd}
                  onChange={onHandleChange}
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
                  type="number"
                  required="required"
                  aria-required="true"
                  className="border-dark text-muted border rounded-0 bg-transparent form-control"
                  maxLength="7"
                  id="__BVID__533"
                  name="budget"
                  value={cart?.budget}
                  onChange={onHandleChange}
                />
              </div>{" "}
              <div className="text-normal font-noto-m custom-control custom-checkbox">
                <input
                  type="checkbox"
                  autoComplete="off"
                  className="custom-control-input"
                  id="__BVID__534"
                  name="budget_tbd"
                  checked={cart?.budget_tbd}
                  onChange={onHandleChange}
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
            onClick={(e) => setModal(e, 0)}
          >
            Previous
          </button>{" "}
          <div className="b-overlay-wrap position-relative">
            <button
              type="button"
              className="btn mx-auto d-block font-noto px-5 btn-normal btn-lg rounded-pill"
              onClick={(e) => setModal(e, 2)}
            >
              Next
            </button>
          </div>
        </div>{" "}
      </div>
    </form>
  );
};

export default EventDetailsModal;
