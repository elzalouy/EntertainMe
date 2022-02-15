import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import contactImg from "../../assets/contactus_image.jpg";
import { contactUs } from "../../httpService/user";
import { UserActions } from "../../store/User";
const ContactUS = () => {
  const dispatch = useDispatch();
  const { email, name, message, error } = useSelector(
    (state) => state.User.contactUs
  );

  const onChangeInput = (e) => {
    dispatch(
      UserActions.onChangeContactUs([
        { element: e.target.name, value: e.target.value },
      ])
    );
  };
  const omSubmit = async () => {
    const result = await contactUs({ email, name, message });
    if (result.error)
      return dispatch(
        UserActions.onChangeContactUs([
          { element: "error", value: result.error.message },
        ])
      );
    window.location.href = "/home";
  };
  return (
    <>
      <main>
        <div id="contactus-page-container">
          <div className="p-0 h-100 container-fluid">
            <div className="row h-100 no-gutters">
              <div className="align-items-center d-flex justify-content-center contactus-background-container col-lg-6">
                <div className="contactus-background">
                  <img
                    alt="contact"
                    src={contactImg}
                    className="contactus-bg img-fluid w-100 mx-auto d-block"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contactus-form d-flex align-items-center justify-content-center h-100 flex-column">
                  <div className="row w-100 justify-content-center align-items-center">
                    <div className="page-title h1 font-noto mb-5">
                      Contact Us
                    </div>
                    <form method="POST" className=" w-75">
                      <div className="form-group mb-1">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={name}
                          onChange={(e) => onChangeInput(e)}
                          placeholder="Your Name.."
                          required="required"
                          autoComplete="name"
                          aria-required="true"
                          className="bg-dark border-0 font-noto-m form-control rounded-0 text-muted form-control form-control-sm"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => onChangeInput(e)}
                          placeholder="Email address.."
                          required="required"
                          autoComplete="email"
                          aria-required="true"
                          className="bg-dark border-0 font-noto-m form-control rounded-0 text-muted form-control form-control-sm"
                        />
                      </div>
                      <div className="form-group mb-1">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          rows="5"
                          wrap="soft"
                          className="bg-dark border-0 font-noto-m form-control rounded-0 text-muted form-control"
                          id="__BVID__40"
                          style={{ resize: "none" }}
                          value={message}
                          onChange={(e) => onChangeInput(e)}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <p style={{ color: "gray" }}>{error}</p>
                      </div>
                      <div className="form-group mb-0">
                        <div className="b-overlay-wrap position-relative d-inline-block">
                          <button
                            type="button"
                            className="btn font-noto px-5 btn-normal rounded-0"
                            onClick={() => omSubmit()}
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <iframe
                    title="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d216.0483031161451!2d31.2745906!3d29.9572117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458381271c03321%3A0x4f68cb264da54ed5!2s17%20%D8%B4%D8%A7%D8%B1%D8%B9%20210%D8%8C%20Maadi%20as%20Sarayat%20Al%20Gharbeyah%2C%20Maadi%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1589159774175!5m2!1sen!2seg"
                    frameBorder="0"
                    allowFullScreen="allowfullscreen"
                    className="w-75 mt-4"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUS;
