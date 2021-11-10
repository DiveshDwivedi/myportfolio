import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="clo__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Get in Touch</h1>
                            <p className="hire__text white">I am Front end Developer. Connect with me via phone:</p>
                            <p className="hire__text white"><strong>+918736830403 </strong>email <strong>dwivedidivesh21@gmail.com</strong> </p>
                            <p className="hire__text white">Or<a href="https://www.linkedin.com/in/divesh-dwivedi-1a0439171" ><strong> LinkedIn</strong></a> </p>
                        </div>
                        <div className="input__box">
                            <input type="text" className="contact name"  placeholder="Your Name *"/>
                            <input type="text" className="contact email"  placeholder="Your Email *"/>
                            <input type="text" className="contact subject"  placeholder="Write a Subject *"/>
                            <textarea name="message" id="message" placeholder="Write Your Message" cols="30" rows="10"></textarea>
                            <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
