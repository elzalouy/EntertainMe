import React from "react";
import loginImg from '../../assets/login_image.jpg';

const LogIn = () => {
  return (
      <>
     <main> 
        <span>
            <div id="login-page-container">
                <div className="p-0 h-100 container-fluid">
                    <div className="row h-100 no-gutters">
                        <div className="login-background-container col-lg-6">
                            <div className="login-background">
                                <img alt='login' src={loginImg} className="login-bg img-fluid w-100"/>
                            </div>
                        </div> 
                        <div className="col-lg-6">
                            <div className="login-form d-flex align-items-center justify-content-center h-100 flex-column">
                                <div className="page-title h1 font-noto">LOGIN</div> 
                                <form method="POST" action="https://www.entertainme.co/login" className="w-75">
                                    <input type="hidden" name="_token" value="zZo4Y5tQ438aMPruYzCg0chO99UbdgHLwE2JXd4K"/> 
                                    <div className="form-group ">
                                        <input id="email" type="email" placeholder="Email address.." name="email" value="" required="required" autocomplete="email" autofocus="autofocus" className="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "/>
                                    </div> 
                                    <div className="form-group">
                                        <input id="password" placeholder="Password.." type="password" name="password" required="required" autocomplete="current-password" className="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "/>
                                    </div> 
                                    <div className="form-group d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                        <div className="text-primary custom-control custom-checkbox">
                                            <input variant="primary" id="remember" type="checkbox" name="remember" autocomplete="off" className="custom-control-input" value="true"/>
                                            <label for="remember" className="custom-control-label" style={{color:"#f70"}}>Remember Me</label>
                                        </div>
                                        </div> 
                                        <a href="https://www.entertainme.co/password/reset" className="btn btn-link text-normal">
                                            Forgot Your Password?
                                        </a>
                                    </div> 
                                    <div className="form-group mb-0 d-flex">
                                        <button type="submit" className="btn mr-3 font-noto px-5 btn-primary rounded-0">Join</button> 
                                        <button type="button" className="btn w-75 font-noto btn-outline-primary rounded-0">New Member Registration</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    </main>
    {/* <div id="scrnli_recorder_root"></div> */}
    </>
  );
};

export default LogIn;