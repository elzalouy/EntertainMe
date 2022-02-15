import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search as httpSearch } from "../../httpService/artists";
import { ArtistsActions } from "../../store/Artists";
import { EventsActions } from "../../store/Events";
import {
  addArtistToCart,
  onRemoveArtistFromCart,
} from "../../store/Events/actions";
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
  const [search, setsearch] = useState("");
  const { cart } = useSelector((state) => state.Events);
  const [searchActive, setsearchActive] = useState(false);
  const { searchArtists, FilterSelectedArtists } = useSelector(
    (state) => state.Artists
  );

  const onHandleSearch = async (text) => {
    setsearchActive(true);
    setsearch(text);
    if (text?.length % 2 === 0) {
      let result = await httpSearch(text);
      if (result?.artists?.length > 0)
        dispatch(
          ArtistsActions.onHandleChangeItems({
            element: "searchArtists",
            value: result?.artists,
          })
        );
    }
  };
  const onHandleChange = (e, arrayName, item) => {
    console.log(item);
    if (e.target.type === "checkbox")
      dispatch(
        EventsActions.onHandleCartArray({
          element: arrayName,
          value: item,
        })
      );
    else
      dispatch(
        EventsActions.onHandleCart([
          { element: e.target.name, value: e.target.value },
        ])
      );
  };
  const onSelectArtist = (item) => {
    dispatch(addArtistToCart(FilterSelectedArtists, item));
    setsearchActive(false);
  };
  const onRemoveArtist = (item) => {
    dispatch(onRemoveArtistFromCart(FilterSelectedArtists, item));
  };
  return (
    <form>
      <div className="booking-steps">
        <div className="booking-step">
          <div className="additional-entertainment mb-3">
            <div className="search-artists">
              <fieldset className="form-group mb-0" id="__BVID__36">
                <div tabIndex="-1" role="group" className="bv-no-focus-ring">
                  <div className="b-overlay-wrap position-relative">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => onHandleSearch(e.target.value)}
                      placeholder="ADDITIONAL ENTERTAINMENT"
                      autoComplete="off"
                      className="bg-primary border-0 font-noto form-control form-control-lg"
                      id="__BVID__38"
                    />
                  </div>
                  <div
                    tabIndex="-1"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    className="invalid-feedback"
                  >
                    You have to choose at least one Artist
                  </div>
                </div>
              </fieldset>
              {/* Loading */}
              <span
                style={{ display: "none" }}
                aria-hidden="true"
                className="search-loading spinner-border text-light"
              ></span>
              {/* List */}
              {searchActive === true ? (
                <div className={"filtered-artists active"}>
                  <ul className="list-unstyled m-0">
                    {searchArtists &&
                      searchArtists?.length > 0 &&
                      searchArtists.map((item, index) => (
                        <li
                          key={index}
                          className="font-noto text-light"
                          onClick={() => onSelectArtist(item)}
                        >
                          {item.name}
                        </li>
                      ))}
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="selected-artists mt-3">
              {FilterSelectedArtists &&
                FilterSelectedArtists?.map((item, index) => (
                  <div
                    onClick={() => onRemoveArtist(item)}
                    key={index}
                    className="selected-artist border border-primary rounded-pill mr-2 mb-2 py-2 px-3 font-noto text-white text-center m-0 h4"
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          </div>
          <div className="additional-services my-3">
            <p className="text-normal font-noto-m">Additional Services</p>{" "}
            <div className="form-row border border-dark p-3">
              {additional_equipment &&
                additional_equipment.map((item, index) => (
                  <div className="col-md-3 col-6" key={index}>
                    <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        onChange={() => {}}
                        id={index + item}
                        checked={
                          cart.additional_equipment.findIndex(
                            (i) => i === item
                          ) >= 0
                            ? true
                            : false
                        }
                        name="additional_equipment"
                        onClick={(e) =>
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
                        onChange={() => {}}
                        className="custom-control-input"
                        id={item + index}
                        checked={
                          cart?.production_items?.findIndex(
                            (i) => i === item
                          ) >= 0
                            ? true
                            : false
                        }
                        onClick={(e) =>
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
