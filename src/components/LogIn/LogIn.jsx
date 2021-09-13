import React from "react";
import { useDispatch, useSelector } from "react-redux";
import loginImg from "../../assets/login_image.jpg";
import { login } from "../../httpService/user";
import { UserActions } from "../../store/User";

const LogIn = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.User.login);
  const onChangeInput = (e) => {
    e.preventDefault();
    dispatch(
      UserActions.onChangeLogin([
        { element: e.target.name, value: e.target.value },
      ])
    );
  };

  const onHandleSubmit=async()=>{
      //call api
    const result= await login(email,password);
  }
  return (
    <>
      <main>
        <span>
          <div id="login-page-container">
            <div className="p-0 h-100 container-fluid">
              <div className="row h-100 no-gutters">
                <div className="login-background-container col-lg-6">
                  <div className="login-background">
                    <img
                      alt="login"
                      src={loginImg}
                      className="login-bg img-fluid w-100"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="login-form d-flex align-items-center justify-content-center h-100 flex-column">
                    <div className="page-title h1 font-noto">LOGIN</div>
                    <form className="w-75">
                      <div className="form-group ">
                        <input
                          id="email"
                          type="email"
                          placeholder="Email address.."
                          name="email"
                          value={email}
                          onChange={(e) => onChangeInput(e)}
                          required="required"
                          autoComplete="email"
                          autoFocus="autofocus"
                          className="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "
                        />
                      </div>
                      <div className="form-group">
                        <input
                          id="password"
                          placeholder="Password.."
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => onChangeInput(e)}
                          required="required"
                          autoComplete="current-password"
                          className="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "
                        />
                      </div>
                      <div className="form-group d-flex justify-content-between align-items-center">
                        <div className="form-check">
                          <div className="text-normal custom-control custom-checkbox">
                            <input
                              variant="primary"
                              id="remember"
                              type="checkbox"
                              name="remember"
                              autoComplete="off"
                              className="custom-control-input"
                              value="true"
                            />
                            <label
                              htmlFor="remember"
                              className="custom-control-label"
                              style={{ color: "#f70" }}
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <a className="btn btn-link text-normal">
                          Forgot Your Password?
                        </a>
                      </div>
                      <div className="form-group mb-0 d-flex">
                        <button
                        type="button"
                          onClick={(e)=>onHandleSubmit(e)}
                          className="btn mr-3 font-noto px-5 btn-normal rounded-0"
                        >
                          Join
                        </button>
                        <button
                          type="button"
                          className="btn w-75 font-noto btn-outline-normal rounded-0"
                        >
                          New Member Registration
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

export default LogIn;
