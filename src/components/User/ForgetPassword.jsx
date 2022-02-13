import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../httpService/user";
import { UserActions } from "../../store/User";

const ForgetPassword = (prop) => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.User.forgetPassword);
  const onHandleChange = (e) => {
    dispatch(
      UserActions.onResetPassword([{ element: "email", value: e.target.value }])
    );
  };
  const onSubmit = async (e) => {
    let result = await forgetPassword(email);
    if (result.error)
      dispatch(
        UserActions.onResetPassword([{ element: "error", value: result.error }])
      );
    if (result.data) window.location.href = "/ResetPasswordCode";
  };
  return (
    <>
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Reset Password</div>
                <div className="card-body">
                  <div className="form-group row">
                    <label
                      htmlFor="email"
                      className="col-md-4 col-form-label text-md-right"
                    >
                      E-Mail Address
                    </label>
                    <div className="col-md-6">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        required="required"
                        autoComplete="email"
                        autoFocus="autofocus"
                        className="form-control"
                        onChange={(e) => onHandleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-0">
                    <div className="col-md-6 offset-md-4">
                      <button
                        className="btn btn-normal"
                        onClick={() => onSubmit()}
                      >
                        Send Password Reset Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgetPassword;
