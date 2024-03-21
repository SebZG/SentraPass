import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUsForm.css";

const Contact = () => {
	const [emailSent, setEmailSent] = useState(false);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		const service_id = import.meta.env
			.VITE_REACT_APP_SENTRA_PASS_EMAILJS_SERVICE_ID;
		const template_id = import.meta.env
			.VITE_REACT_APP_SENTRA_PASS_EMAILJS_TEMPLATE_ID;
		const public_key = import.meta.env
			.VITE_REACT_APP_SENTRA_PASS_EMAILJS_PUBLIC_KEY;

		emailjs
			.sendForm(service_id, template_id, form.current, {
				publicKey: public_key,
			})
			.then(
				(result) => {
					console.log(result.text);
					console.log("message sent");
					setEmailSent(true);
				},
				(error) => {
					console.log(error.text);s
				}
			);
	};

	return (
		<>
			{!emailSent ? (
				<div className="contact-form col-md-4">
					<form ref={form} onSubmit={sendEmail}>
						<label className="mb-2">Name</label>
						<input type="text" name="user_name" />
						<label className="mb-2">Email</label>
						<input type="email" name="user_email" />
						<label className="mb-2">Message</label>
						<textarea name="message" rows={8} />
						<input className="" type="submit" value="Send" />
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
