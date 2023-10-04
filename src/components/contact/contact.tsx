import './contact.scss'
import { useState } from 'react'
import Lottie from 'lottie-react'
import envelope from './contact-lottie.json';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setName('');
		setEmail('');
		setMessage('');
		alert(`Thank you for your message! we will get back to you as soon as possible!`);
		console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
	};

	return (
		<div className="formContainer">
			<form method='post' action="mailto:navidasaman@gmail.com" className="contactForm" onSubmit={handleSubmit}>
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
			<Lottie animationData={envelope} style={{width: "40%"}}/>
		</div>
	)
}

export default Contact
