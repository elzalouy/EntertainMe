import React from "react";

const ContactModal = ({onHandleChange}) => {
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
        </div>
        <div class="flex-center mt-3">
            <button type="button" class="btn d-block font-noto px-5 mr-3 btn-normal btn-lg rounded-pill">Previous</button> 
            <div class="b-overlay-wrap position-relative">
                <button type="submit" class="btn mx-auto d-block font-noto px-5 btn-normal btn-lg rounded-pill">Submit</button>
            </div>
        </div>
        </div>
        </form>

    );
}

export default ContactModal;