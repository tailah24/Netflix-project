 import React, {Component} from "react";
import logo from "../svg/logo.svg";
import styled from "styled-components";
import {Icon} from "react-icons-kit";
import {ic_keyboard_arrow_right} from "react-icons-kit/md/ic_keyboard_arrow_right";
import { generateMedia } from "styled-media-query";
import { NavLink } from "react-router-dom";


class Header extends Component {
	render() {
		return(
			<HeaderComponent className="header-container">
			  <div className=" header-top">
				<Logo src={logo} alt=""></Logo>
					<NavLink to="/Login" className="signIn-btn"> Sign In </NavLink>
					<div className="header-content"> 
					<div style={{marginTop:'5%'}} >
					<Title>Unlimited movies, TV <br />shows, and more.</Title>
					<SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
					</div>
					<Signup className="signUp">
					<input className="input" type="text" placeholder="Email address"></input>
					<button className="offerbtn">TRY IT NOW
						<Icon className="Icon" icon={ic_keyboard_arrow_right} size={30} />
					</button>
					</Signup>
					<Paragraph >Ready to watch? Enter your email to create or access your account.</Paragraph>

					</div>


			</div>

			

			</HeaderComponent>


			);

	}
}
export default Header

const customMedia = generateMedia({
  lgDesktop: "1350px",
  MdDesktop: "1150px",
  tablet: "960px",
  mobile: "740px"

});

//logo

const Logo = styled.img`
top: 6%;
left: 5%;
padding-top: 1.8rem;
width: 10rem;
height: 4rem;
position: absolute;
transform: translate (-50%, -50%);

`;

// Header container

const HeaderComponent = styled.div`
padding-bottom: 41rem;
.signIn-btn { 
	right: 0;
	margin: 1.125rem 5% 0;
	padding: 0.5375rem 1.0625rem;
	margin-top: 2rem;
	font-weight: 400;
	line-height: normal;
	border-radius: 0.1875rem;
	font-size: 1rem;
	background: var(--main-red);
	position: absolute; 
	translate: transform(-50%, -50%);
	cursor: pointer;
	transition: background 0.2s ease-in;
	color: white;
	border: none;

	
	}
}

//Header Top

.header-top {

	position: relative;
	height: 10rem;
	z-index: 1;
}

//Header content

.header-content {
	width: 65%;
	position: relative;
	margin: 0 auto 4.5rem;
	display: flex;
	justify-content: center;
	align-content: center;
	text-align: center;
	flex-direction: column;
	padding-top: 15%;

	${customMedia.lessThan("smTablet")`
	display: grid;
	grid-template-rows: repeat(3, 60px);
	margin-top: 8rem;

`}

}

`;




//Main title

const Title = styled.h1`
margin: 0 0 1.2rem;
font-size: 3rem;
font-weight: 600;
line-height: 1.1em;

`;

//SubTitle

const SubTitle = styled.h2`
font-weight: 400;
font-size: 1.5rem;
line-height: 1.0em;
margin: 0 0 1.875rem;

`;

// paragraph

const Paragraph = styled.p`
font-size: 1.25rem;
`;

//Sign-up

const Signup = styled.div`
display: flex;
margin: 0 auto;
padding-top: 0;
.offerbtn{
	display: inline-block;
	background: var(--main-red);
	text-transform: uppercase;
	border: none;
	outline: none;
	padding: 1rem;
	border-radius: 0.1875rem;
	font-size: 1.5rem;
	text-align: center;
	box-shadow: 0 1px 0 rgba(0,0,0,0.45); 
	transition: background 0.2s ease-in;
	cursor: pointer; 
	color: white;
	&:hover {
		background: var(--main-red-hover);

	}
	${customMedia.lessThan("tablet")`
	display: grid;
	grid-template-rows: repeat;


`}
}

.Icon{
	vertical-align: bottom;
	margin-left: 1.5rem;
}
.input {
	display: inline-block;
	border: none;
	outline: none;
	padding: 1rem;
	border-radius: 0.0875rem;
	font-size: 1.5rem;
	text-align: start;
	width: 30rem;
	
	
}
	

}
`;
















