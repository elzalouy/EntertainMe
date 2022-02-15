import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../httpService/user";
import { UserActions } from "../../store/User";

const ResetPasswordCode = (props) => {
  const dispatch = useDispatch();
  const { code, password, password_confirmation, error } = useSelector(
    (state) => state.User.forgetPassword
  );
  const onHandleChange = (e) => {
    dispatch(
      UserActions.onResetPassword([
        {
          element: e.target.name,
          value: e.target.value,
        },
        { element: "error", value: "" },
      ])
    );
  };
  const onSubmit = async () => {
    let result = await resetPassword({
      code: parseInt(code),
      password: password,
      confirm_password: password_confirmation,
    });
    if (result.error)
      dispatch(
        UserActions.onResetPassword([{ element: "error", value: result.error }])
      );
    else window.location.href = "/logIn";
  };
  return (
    <>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">Reset Password</div>
              <div class="card-body">
                <div class="form-group row">
                  <label
                    for="email"
                    class="col-md-4 col-form-label text-md-right"
                  >
                    Code
                  </label>
                  <div class="col-md-6 mb-2">
                    <input
                      id="code"
                      type="text"
                      name="code"
                      value={code}
                      required="required"
                      autocomplete="text"
                      autofocus="autofocus"
                      class="form-control"
                      onChange={(e) => onHandleChange(e)}
                    />
                  </div>
                  <label
                    for="email"
                    class="col-md-4 col-form-label text-md-right"
                  >
                    Password
                  </label>
                  <div class="col-md-6  mb-2">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      required="required"
                      autocomplete="email"
                      autofocus="autofocus"
                      class="form-control"
                      onChange={(e) => onHandleChange(e)}
                    />
                  </div>
                  <label
                    for="email"
                    class="col-md-4 col-form-label text-md-right"
                  >
                    Confirm Password
                  </label>
                  <div class="col-md-6 mb-2">
                    <input
                      id="password"
                      type="password"
                      name="password_confirmation"
                      value={password_confirmation}
                      required="required"
                      autocomplete="email"
                      autofocus="autofocus"
                      class="form-control"
                      onChange={(e) => onHandleChange(e)}
                    />
                  </div>
                  <div class="col-md-6 mb-2">
                    <p style={{ color: "red" }}>
                      {error.length > 0 ? error : ""}
                    </p>
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <div class="col-md-6 offset-md-4">
                    <button class="btn btn-normal" onClick={() => onSubmit()}>
                      Submit new Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordCode;
