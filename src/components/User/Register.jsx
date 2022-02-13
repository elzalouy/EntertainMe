import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UserActions } from "../../store/User";
import { register as httpRegister } from "../../httpService/user";
import ReactFacebookLogin from "react-facebook-login";
import ReactGoogleLogin from "react-google-login";
const Register = () => {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.User.register);

  const onHandleChange = (e) => {
    dispatch(
      UserActions.onChangeRegister([
        { element: e.target.name, value: e.target.value },
      ])
    );
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const result = await httpRegister({
      first_name: register.first_name,
      last_name: register.last_name,
      email: register.email,
      password: register.password,
      password_confirmation: register.password_confirmation,
      type: "user",
    });
    if (result.error)
      return dispatch(
        UserActions.onChangeRegister([
          { element: "error", value: result.error.message },
        ])
      );
    window.location.href = "/home";
  };
  const onGoogleLogin = (callBack) => {
    dispatch(
      UserActions.onSetRegister({
        first_name: callBack?.Du?.VX,
        last_name: callBack?.Du?.iW,
        email: callBack.Du?.tv,
        password: "",
        password_confirmation: "",
        type: "user",
        error: "",
        secure: true,
      })
    );
  };
  const onFacebookLogin = (callBack) => {
    console.log(callBack);
  };
  return (
    <>
      <main>
        <span>
          <div id="register-page-container">
            <div className="p-0 h-100 container-fluid">
              <div className="row h-100 no-gutters">
                <div className="register-background-container justify-content-center align-items-center col-lg-6">
                  <div className="register-background">
                    <img
                      alt="1"
                      src="https://www.entertainme.co/storage/images/register_image.jpg"
                      className="register-bg mx-auto d-block"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="register-form d-flex align-items-center justify-content-center h-100 flex-column">
                    <div className="page-title h1 font-noto">Register</div>
                    <div className="w-75 mb-4">
                      <ReactFacebookLogin
                        appId={process.env.REACT_APP_FACEBOOK_ID}
                        fields="name,email,picture"
                        callback={onFacebookLogin}
                        cssClass="btn facebook font-noto border-0 btn-secondary btn-block rounded-0"
                      />
                    </div>
                    <div className="w-75 mb-4">
                      <ReactGoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_ID}
                        onSuccess={onGoogleLogin}
                        cookiePolicy="single_host_origin"
                        buttonText="Login with Google"
                        className="btn gmail font-noto border-0 btn-secondary justify-content-center btn-block rounded-0"
                      />
                    </div>
                    <form className="w-75">
                      <input
                        type="hidden"
                        name="_token"
                        value="HrNyg0saeNwf1lH9CeSUChOEuVzhR4J6p7R8aoYL"
                      />
                      <div className="form-group row">
                        <div className="col-md-6">
                          <input
                            id="first_name"
                            type="text"
                            placeholder="First Name.."
                            name="first_name"
                            value={register.first_name}
                            onChange={(e) => onHandleChange(e)}
                            required="required"
                            autoComplete="first_name"
                            autoFocus="autofocus"
                            className="form-control mb-2 mb-md-0 bg-dark border-0 font-noto-m form-control rounded-0 text-muted "
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            id="last_name"
                            type="text"
                            placeholder="Last Name.."
                            name="last_name"
                            value={register.last_name}
                            onChange={(e) => onHandleChange(e)}
                            required="required"
                            autoComplete="last_name"
                            autoFocus="autofocus"
                            className="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <input
                          id="email"
                          type="email"
                          placeholder="Email address.."
                          name="email"
                          value={register.email}
                          onChange={(e) => onHandleChange(e)}
                          required="required"
                          autoComplete="email"
                          className="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "
                        />
                      </div>
                      <div className="form-group">
                        <input
                          id="password"
                          placeholder="Password.."
                          type="password"
                          name="password"
                          value={register.password}
                          onChange={(e) => onHandleChange(e)}
                          required="required"
                          autoComplete="new-password"
                          className="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "
                        />
                      </div>
                      <div className="form-group">
                        <input
                          id="password_confirmation"
                          placeholder="Confirm Password.."
                          type="password"
                          name="password_confirmation"
                          value={register.password_confirmation}
                          onChange={(e) => onHandleChange(e)}
                          required="required"
                          autoComplete="new-password"
                          className="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "
                        />
                      </div>
                      <div className="form-group">
                        <p style={{ color: "gray" }}>
                          {register && register.error}
                        </p>
                      </div>
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="btn mx-auto font-noto px-5 d-block btn-normal rounded-0"
                          onClick={(e) => onHandleSubmit(e)}
                        >
                          Join
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </main>
    </>
  );
};
export default Register;
