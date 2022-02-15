import React from "react";

const AuthModal = () => {
  return (
    <div id="auth-required-modal" className="modal fade">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <span tabIndex="0"></span>
        <div
          role="document"
          id="auth-required-modal___BV_modal_content_"
          tabIndex="-1"
          className="modal-content"
        >
          <div
            id="auth-required-modal___BV_modal_body_"
            className="modal-body bg-dark text-light"
          >
            <div className="font-noto text-center h4">
              <strong>Login</strong> required to do this action
            </div>
          </div>
          <footer
            id="auth-required-modal___BV_modal_footer_"
            className="modal-footer bg-dark"
          >
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <a target="_self" href="/login" className="btn btn-normal">
              Login
            </a>
          </footer>
        </div>
        <span tabIndex="0"></span>
      </div>
    </div>
  );
};

export default AuthModal;
