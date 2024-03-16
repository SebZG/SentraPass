import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUsForm.css";

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SENTRA_PASS_EMAILJS_SERVICE_ID,
        SENTRA_PASS_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: SENTRA_PASS_EMAILJS_PUBLIC_KEY }
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {!emailSent ? (
        <div className="contact-form col-md-4">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      ) : (
        <div className="email-sent-message">
          <h1>Email Sent! Thank You!</h1>
          <p>We'll get back to you as soon as we can.</p>
        </div>
      )}
    </>
  );
};

export default Contact;
