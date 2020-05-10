import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../css/Footer.css"


 class Footer extends Component {
	render() {
		return (
			<FooterContainer className="list">
			<p className="question"><NavLink className="list">Questions? Contact us.</NavLink></p>
			<div className="footer-columns">
				<ul>
				<li><NavLink className="list">FAQ</NavLink></li>
				<li><NavLink className="list">Investor Relations</NavLink></li>
				<li><NavLink className="list">Investor Relations</NavLink></li>
				<li><NavLink className="list">Ways to Watch</NavLink></li>
				<li><NavLink className="list">Corporate Information</NavLink></li>
				<li><NavLink className="list">Netflix Originals</NavLink></li>

				</ul>

				<ul>
				<li><NavLink className="list">Help Center</NavLink></li>
				<li><NavLink className="list">Jobs</NavLink></li>
				<li><NavLink className="list">Terms of Use</NavLink></li>
				<li><NavLink className="list">Contact Us</NavLink></li>
				
				</ul>
				<ul>
				<li><NavLink className="list">Account</NavLink></li>
				<li><NavLink className="list">Redeem Gift Cards</NavLink></li>
				<li><NavLink className="list">Privacy</NavLink></li>
				<li><NavLink className="list">Speed Test</NavLink></li>
				</ul>

				<ul>
				<li><NavLink className="list">Media Center</NavLink></li>
				<li><NavLink className="list">Buy Gift Cards</NavLink></li>
				<li><NavLink className="list">Cookie Preferences</NavLink></li>
				<li><NavLink className="list">Legal Notices</NavLink></li>

				</ul>
			</div>

			</FooterContainer>
		);
	}
}
export default Footer;

//Footer container

const FooterContainer = styled.footer`

background: var(--main-deep-dark);
padding-bottom: 3rem;

.footer-columns {
	width: 70%;
	margin: 1rem auto 0;
	font-size: 0.9rem;
	overflow: auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);

ul li {
	line-height: 2.5;

}


}

`;



