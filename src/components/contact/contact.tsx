import './contact.scss'
import { useState, useRef } from 'react'
import Lottie from 'lottie-react'
import envelope from './contact-lottie.json';
import emailjs from '@emailjs/browser';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const form = useRef<HTMLFormElement | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setName('');
		setEmail('');
		setMessage('');

		if (form.current) {
			const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
			const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
			const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
		  
			if (serviceId && templateId && publicKey) {
			  emailjs.sendForm(serviceId, templateId, form.current, publicKey)
				.then((result) => {
				  console.log(result.text);
				  toast.success("Thank you for your message! I will get back to you shortly. Have a great day!");
				}, (error) => {
				  console.log(error.text);
				  toast.error("I apologise for the inconvenience, service is not working at the moment and is under maintenence. I advise you to please contact me through my Linkedin. I hope you have a great day!");
				});
			} else {
			  console.log('One or more environment variables are undefined.');
			}
		  }
	};

	return (
		<div className="formContainer">
			<ToastContainer style={{marginTop:"3%", fontSize:"15px", textAlign:"left", letterSpacing:"0px", color:"black"}} />
			<form ref={form} onSubmit={handleSubmit} className="contactForm">
				<h1>Contact.</h1>
				<input className="formInput" type="text" name="name" id="name" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
				<input className="formInput" type="email" name="email" id="email" placeholder='e-mail@email.com' onChange={(e) => setEmail(e.target.value)} value={email} required />
				<textarea
					name="message"
					id="message"
					style={{ width: '100%', height: '150px' }}
					placeholder='Type your message here'
					required
					onChange={(e) => setMessage(e.target.value)} value={message}
				></textarea>
				<button className="formButton" type='submit'>Contact me</button>
			</form>
			<Lottie animationData={envelope} style={{ width: "40%" }} />
		</div>
	)
}

export default Contact
