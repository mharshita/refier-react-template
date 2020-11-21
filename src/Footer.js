import React from "react"
import "./App.css"

const Footer = () => {
    return(
        <section className="footer">
            <h3 class="footer-head">Contact Us</h3>
            <div className="contact-div">
                <form className="form-footer">
                    <div className="row">
                        <div className="col">
                            <label for="name">Name</label>
                            <input type="text" class="form-control form-field" />
                        </div>
                        <div className="col">
                            <label for="number">Phone Number</label>
                            <input type = "number" class="form-control form-field" />
                        </div>
                    </div>
                    <label for="email">Email</label>
                    <input type="email" class="form-control form-field" />
                    <label for="message">Message</label>
                    <input type="text" class="form-control form-field" />
                    <button type="submit" class="btn btn-submit text-white">Submit</button>
                </form>
                <div className="row">
                    <div className="col">
                    <div className="call">
                        <p>Call Us</p>
                        <a href="tel:+91-879-0909-745">+91-879-0909-745</a>
                    </div>
                    </div>
                    <div className="col">
                    <div className="mail">
                        <p>Email Us</p>
                        <a href="info@refier.com">info@refier.com</a>
                    </div>
                    </div>
                </div>
                <div className="social-icons">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                    <a href="#" class="fa fa-linkedin"></a>
    
                    <a href="#" class="fa fa-facebook"></a>

                    <a href="#" class="fa fa-twitter"></a>
    
                    <a href="#" class="fa fa-instagram"></a>
                
                    <a href="#" class="fa fa-youtube"></a>
                </div>
                <p className="last">Copyrights © 2020 All Rights Reserved by EaseAssist Information Solutions Pvt Ltd</p>
            </div>
        </section>
    )
}

export default Footer;