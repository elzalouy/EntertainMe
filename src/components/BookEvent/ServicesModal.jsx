import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventsActions } from "../../store/Events";

const additional_equipment = [
  "Sound",
  "Led Screens",
  "Stage Management",
  "Ushers",
  "Permits",
  "Venu Rental",
  "Location Renting",
  "Walkie Talkies",
  "Light",
  "Mojo Barriers",
  "Photography",
  "Security",
  "Socail Media Coverage",
  "Catering",
  "AR (Augmented Reality)",
  "Stage",
  "Geneators",
  "Videography",
  "On ground Operations Team",
  "Seating arrangments",
  "VR (Virtual Reality)",
  "3D Mapping",
  "Other",
];
const production_items = [
  "Counters/Desk",
  "Trusses",
  "Flags",
  "Uniforms",
  "Flyers",
  "Brochures",
  "Booths",
  "Backdrop",
  "Decorations",
  "Branded Car/Truck",
  "Directional Signs",
  "Giveaways",
  "Gate",
  "Mockups",
  "Bracelets",
  "Banners",
  "Printed Invitations",
  "Other",
];

const ServicesModal = ({ setModal }) => {
  const dispatch = useDispatch();
  const bookEvent = useSelector((state) => state.Events.bookEvent);
  const onHandleChange = (e, arrayName, item) => {
    if (e.target.type === "checkbox")
      dispatch(
        EventsActions.onHandleBookEventArray({
          element: arrayName,
          value: item,
        })
      );
    else
      dispatch(
        EventsActions.onHandleBookEvent([
          { element: e.target.name, value: e.target.value },
        ])
      );
  };
  return (
    <form>
      <div className="booking-steps">
        <div className="booking-step">
          <fieldset className="form-group">
            <div role="group" className="bv-no-focus-ring">
              <textarea
                placeholder="What type of entertainment are you looking for? (please tell us anything that would assist us in selecting the best options for you)"
                required="required"
                rows="2"
                wrap="soft"
                aria-required="true"
                className="bg-transparent border border-dark rounded-0 form-control"
                name="additional_info"
                value={bookEvent.additional_info}
                onChange={(e) => onHandleChange(e, "", "")}
              ></textarea>
            </div>
          </fieldset>{" "}
          <div className="additional-services my-3">
            <p className="text-normal font-noto-m">Additional Services</p>{" "}
            <div className="form-row border border-dark p-3">
              {additional_equipment &&
                additional_equipment.map((item, index) => (
                  <div className="col-md-3 col-6" key={index}>
                    <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                      <input
                        type="checkbox"
                        autoComplete="off"
                        className="custom-control-input"
                        id={index + item}
                        checked={
                          bookEvent.additional_equipment.indexOf(item) >= 0
                            ? true
                            : false
                        }
                        onChange={(e) =>
                          onHandleChange(e, "additional_equipment", item)
                        }
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={index + item}
                      >
                        {" "}
                        {item}
                      </label>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="additional-services my-3">
            <p className="text-normal font-noto-m">Production</p>{" "}
            <div className="form-row border border-dark p-3">
              {production_items &&
                production_items.map((item, index) => (
                  <div className="col-md-3 col-6" key={index}>
                    <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                      <input
                        type="checkbox"
                        autoComplete="off"
                        className="custom-control-input"
                        value="Counters/Desk"
                        id={item + index}
                        checked={
                          bookEvent.production_items.indexOf(item) >= 0
                            ? true
                            : false
                        }
                        onChange={(e) =>
                          onHandleChange(e, "production_items", item)
                        }
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={item + index}
                      >
                        {item}
                      </label>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex-center mt-3">
          <div className="b-overlay-wrap position-relative">
            <button
              type="button"
              className="btn mx-auto d-block font-noto px-5 btn-normal btn-lg rounded-pill"
              onClick={(e) => setModal(e, 1)}
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
