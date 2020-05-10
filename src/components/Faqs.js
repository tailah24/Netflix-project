import React, { useState } from 'react';
import "../css/Faqs.css";
import FAQ from "../FAQ.js"
import {Icon} from "react-icons-kit";
import {ic_keyboard_arrow_right} from "react-icons-kit/md/ic_keyboard_arrow_right";

 
function Faqs (){
	const[ faqs, setfaqs]= useState([

		{
			question: "What is Netflix?",
			answer: " Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are every added week! ",
			open: false
		 },

		{
			question: "How much does Netflix cost?",
			answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one low fixed monthly fee. Plans start from $8.99 a month. No extra costs or contracts.",
			open: false 
		},

		{ 
			question: "Where can I watch?",
			answer: " Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere. ",
			open: false
		},

		{ 
			question: "How do I cancel?",
			answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
			open: false
		},

		{
			question: "What can I watch on Netflix?",
			answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want",
			open: false
		 }

		])

	const toggleFAQ = index => {
		setfaqs(faqs.map((faq, i) => {
			if (i === index) {
				faq.open = !faq.open
			} else {
				faq.open = false;
			} 

			return faq;
		}))
	}
	return (
			<div className="main-faq">
			<h1 className="faq-h1"> Frequently Asked Questions</h1>
			 <div className="faqs">
			 {faqs.map((faq, i) => (
			 	<FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
			 	))}
			 <div className="signUp">
				<input className="input" type="text" placeholder="Email address"></input>
					<button className="offerbtn">TRY IT NOW
						<Icon className="Icon" icon={ic_keyboard_arrow_right} size={30} />
					</button>
					</div>
					<p className="paragraph">Ready to watch? Enter your email to create or access your account.</p>

			 </div>
				
			</div>
		);
	}
export default Faqs



