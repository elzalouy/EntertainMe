import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { EventsActions } from "../../store/Events";
import { validateEvent } from "../../httpService/validate";
import { requestOrder } from "../../httpService/event";

const ContactModal = ({ setModal }) => {
  const dispatch = useDispatch();
  const { cart, error } = useSelector((state) => state.Events);
  const onHandleChange = (e) => {
    dispatch(
      EventsActions.onHandleCart([
        { element: e.target.name, value: e.target.value },
      ])
    );
  };
  const onHandleSubmit = async (e) => {
    let data = {
      additional_info: cart.additional_info,
      budget: parseInt(cart.budget),
      duration: parseInt(cart.duration),
      address: cart.address,
      date: new Date(cart.date).toISOString(),
      description: cart.description,
      placement: cart.placement,
      guests: parseInt(cart.guests),
      additional_equipment: cart.additional_equipment,
      artists: cart.artists,
      name: cart.name,
      email: cart.email,
      phone_number: cart.phone_number,
      production_items: cart.production_items,
      budget_tbd: cart.budget_tbd ? 1 : 0,
      duration_tbd: cart.duration_tbd ? 1 : 0,
      event_name: cart.event_name,
    };
    const result = validateEvent(data);
    data.type = "booking";
    if (result) return dispatch(EventsActions.onHandleError(result.error));
    else {
      const response = await requestOrder(data);
      if (response.error)
        return dispatch(EventsActions.onHandleError(result.error));
      else window.location.href = "/home";
    }
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
                value={cart.name}
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
                value={cart.email}
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
                value={cart.phone_number}
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
                value={cart.additional_info}
                onChange={onHandleChange}
              />
            </div>
            <p className="text-warning">{error}</p>
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
              onClick={() => onHandleSubmit()}
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
