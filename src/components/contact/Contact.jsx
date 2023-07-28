import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>

            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>tzknkong@gmail.com</h5>
                        <a href="mailto:tzknkong@gmail.com">Send a message</a>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Contact;
