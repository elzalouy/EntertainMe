import React from "react";
import contactImg from '../../assets/contactus_image.jpg';

const ContactUS = () => {
 
  return (
      <>
        <main>
            <div id="contactus-page-container">
                <div class="p-0 h-100 container-fluid">
                    <div class="row h-100 no-gutters">
                        <div class="align-items-center d-flex justify-content-center contactus-background-container col-lg-6">
                            <div class="contactus-background">
                                <img src={contactImg} class="contactus-bg img-fluid w-100 mx-auto d-block"/>
                            </div>
                        </div> 
                        <div class="col-lg-6">
                            <div class="contactus-form d-flex align-items-center justify-content-center h-100 flex-column">
                                <div class="page-title h1 font-noto">Contact Us</div> 
                                <form method="POST" class="w-75">
                                    <div class="form-group mb-1">
                                        <input id="name" name="name" type="text" placeholder="Your Name.." required="required" autocomplete="name" aria-required="true" class="bg-dark border-0 font-noto-m form-control rounded-0 text-muted form-control form-control-sm"/>
                                    </div> 
                                    <div class="form-group">
                                        <input id="email" name="email" type="email" placeholder="Email address.." required="required" autocomplete="email" aria-required="true" class="bg-dark border-0 font-noto-m form-control rounded-0 text-muted form-control form-control-sm"/>
                                    </div> 
                                    <div class="form-group mb-1">
                                        <textarea name="message" placeholder="Your Message" rows="5" wrap="soft" class="bg-dark border-0 font-noto-m form-control rounded-0 text-muted form-control" id="__BVID__40" style={{resize:"none"}}></textarea>
                                    </div> 
                                    <div class="form-group mb-0">
                                        <div class="b-overlay-wrap position-relative d-inline-block">
                                            <button type="submit" class="btn font-noto px-5 btn-primary rounded-0">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d216.0483031161451!2d31.2745906!3d29.9572117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458381271c03321%3A0x4f68cb264da54ed5!2s17%20%D8%B4%D8%A7%D8%B1%D8%B9%20210%D8%8C%20Maadi%20as%20Sarayat%20Al%20Gharbeyah%2C%20Maadi%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1589159774175!5m2!1sen!2seg" 
                                frameborder="0" allowfullscreen="allowfullscreen" class="w-75 mt-4"></iframe>
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