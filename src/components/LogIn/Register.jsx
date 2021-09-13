import React from "react";
import {Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
        <main>
            <span>
                <div id="register-page-container">
                    <div class="p-0 h-100 container-fluid">
                        <div class="row h-100 no-gutters">
                            <div class="register-background-container justify-content-center align-items-center col-lg-6">
                                <div class="register-background">
                                    <img src="https://www.entertainme.co/storage/images/register_image.jpg" class="register-bg mx-auto d-block"/>
                                </div>
                            </div> 
                            <div class="col-lg-6">
                                <div class="register-form d-flex align-items-center justify-content-center h-100 flex-column">
                                    <div class="page-title h1 font-noto">Register</div> 
                                    <div class="w-75 mb-4">
                                        <button type="button" class="btn facebook font-noto border-0 btn-secondary btn-block rounded-0">Facbook</button> 
                                        <button type="button" class="btn gmail font-noto border-0 btn-secondary btn-block rounded-0">G Mail</button>
                                    </div> 
                                    <form method="POST" action="https://www.entertainme.co/register" class="w-75">
                                        <input type="hidden" name="_token" value="HrNyg0saeNwf1lH9CeSUChOEuVzhR4J6p7R8aoYL"/> 
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <input id="first_name" type="text" placeholder="First Name.." name="first_name" value="" required="required" autocomplete="first_name" autofocus="autofocus" class="form-control mb-2 mb-md-0 bg-dark border-0 font-noto-m form-control rounded-0 text-muted "/>
                                            </div> 
                                            <div class="col-md-6">
                                                <input id="last_name" type="text" placeholder="Last Name.." name="last_name" value="" required="required" autocomplete="last_name" autofocus="autofocus" class="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "/>
                                            </div>
                                        </div> 
                                        <div class="form-group ">
                                            <input id="email" type="email" placeholder="Email address.." name="email" value="" required="required" autocomplete="email" class="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "/>
                                        </div> 
                                        <div class="form-group">
                                            <input id="password" placeholder="Password.." type="password" name="password" required="required" autocomplete="new-password" class="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "/>
                                        </div> 
                                        <div class="form-group">
                                            <input id="password_confirmation" placeholder="Confirm Password.." type="password" name="password_confirmation" required="required" autocomplete="new-password" class="form-control bg-dark border-0 font-noto-m form-control rounded-0 text-muted "/>
                                        </div> 
                                        <div class="form-group mb-0">
                                            <button type="submit" class="btn mx-auto font-noto px-5 d-block btn-normal rounded-0">Join</button>
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