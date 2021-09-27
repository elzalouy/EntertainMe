import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { EventsActions } from "../../store/Events";
import { validateEvent } from "../../httpService/validate";
import { requestOrder } from "../../httpService/event";

const ContactModal = ({ setModal }) => {
  const dispatch = useDispatch();
  const bookEvent = useSelector((state) => state.Events.bookEvent);
  const onHandleChange = (e) => {
    dispatch(
      EventsActions.onHandleBookEvent([
        { element: e.target.name, value: e.target.value },
      ])
    );
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      additional_info: bookEvent.additional_info,
      budget: bookEvent.budget,
      duration: bookEvent.duration,
      address: bookEvent.address,
      date: new Date(bookEvent.date),
      description: bookEvent.description,
      placement: bookEvent.placement,
      guests: bookEvent.guests,
      additional_equipment: bookEvent.additional_equipment,
      artists: bookEvent.artists,
      name: bookEvent.name,
      email: bookEvent.email,
      phone_number: bookEvent.phone_number,
      production_items: bookEvent.production_items,
      type: "booking",
      budget_tbd: bookEvent.budget_tbd ? 1 : 0,
      duration_tbd: bookEvent.duration_tbd ? 1 : 0,
      event_name: bookEvent.event_name,
    };
    const result = validateEvent(data);
    if (result) return dispatch(EventsActions.onHandleError(result.error));
    const response = await requestOrder(data);
    console.log(response);
  };
  return (
    <form>
      <div className="booking-steps">
        <div className="booking-step">
          <fieldset className="form-group" id="__BVID__535">
            <div tabIndex="-1" role="group" className="bv-no-focus-ring">
              <p className="font-noto-m text-normal mb-2">
                Contact Infromation
              </p>{" "}
              <input
                type="text"
                placeholder="Name.."
                required="required"
                aria-required="true"
                className="bg-transparent border text-muted border-dark rounded-0 form-control"
                id="__BVID__536"
                name="name"
                value={bookEvent.name}
                onChange={onHandleChange}
              />
            </div>
          </fieldset>{" "}
          <fieldset className="form-group" id="__BVID__537">
            <div tabIndex="-1" role="group" className="bv-no-focus-ring">
              <input
                type="email"
                placeholder="Email Address.."
                required="required"
                aria-required="true"
                className="bg-transparent border text-muted border-dark rounded-0 form-control"
                id="__BVID__538"
                name="email"
                value={bookEvent.email}
                onChange={onHandleChange}
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
                value={bookEvent.phone_number}
                onChange={onHandleChange}
              />
            </div>
          </fieldset>
          <fieldset className="form-group" id="__BVID__541">
            <div tabIndex="-1" role="group" className="bv-no-focus-ring">
              <input
                type="text"
                placeholder="Additional Info.."
                className="bg-transparent border text-muted border-dark rounded-0 form-control"
                id="__BVID__542"
                name="additional_info"
                value={bookEvent.additional_info}
                onChange={onHandleChange}
              />
            </div>
          </fieldset>
        </div>
        <div className="flex-center mt-3">
          <button
            type="button"
            className="btn d-block font-noto px-5 mr-3 btn-normal btn-lg rounded-pill"
            onClick={(e) => setModal(e, 1)}
          >
            Previous
          </button>
          <div className="b-overlay-wrap position-relative">
            <button
              type="button"
              className="btn mx-auto d-block font-noto px-5 btn-normal btn-lg rounded-pill"
              onClick={onHandleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactModal;
