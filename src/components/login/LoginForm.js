import React, { Component } from 'react';
import styled from "styled-components"
import { NavLink } from "react-router-dom";


 class LoginForm extends Component {
	render() {
		return (
			<FormContainer>
			<div className="form-container">
			<form>
			<h1> Sign In</h1>

			<div className="input-container">
			<input className="input-empty" type="email" required />
			<label>Email or Phone number</label> 

			</div> 
			<div className="input-container">
			<input className="input-empty" type="password" required />
			<label>password</label> 

			</div>
			<div className="input-container">
			<Button type="submit"> Sign In</Button>

			</div>
			<label className="checkbox-container">

			<input type="checkbox">
			</input>
			Remember me

			 </label>
			 <span className="checkmark"></span>
			 <NavLink to="/" className="need-help"> Need help?</NavLink>
			</form>

			</div>


			</FormContainer>
		);
	}
}
export default LoginForm;

const FormContainer = styled.div`
display: grid;
justify-content: center;
position: relative;
z-index: 5;


.form-container{
	background: rgba(0,0,0,0.8);
	position: relative;
	width: 28.125rem;
	height: 41.25rem;
	padding: 4rem;
}

.input-container {
	display: grid;
	grid-template-column: 1fr;
	margin-top: 1.2em;
}

.input-empty {
	color: #fff;
	background: #333;
	border: 0;
	border-radius: 0.25rem;
	height: 3rem;
	padding: 0.9rem 1.25rem 0;
}

form div label {
	position: absolute;
	top: 0.625rem;
	left: 1.25rem;
	poiner-events: none;
	color: #8a8a8a;
	font-size:  1rem;
	transition: transform 150ms ease-out, font-size 150ms ease-out;
}

form div {
	position: relative;

}
input:focus ~ label {
	top: 0.437rem;
	font-size: 0.7rem;

}

input:focus {
	outline: none;
}

.checkbox-container {
	padding-left: 1.875rem;
	margin-left: 0.75rem;
	position: relative;
	font-size: 0.9rem;
	cursor: pointer;
	margin-top: 5%;

}
.checkbox-container input {
	display: none;
}
.checkmark {
	display: inline-block;
	background: #454545;
	width: 1.1rem;
	height: 1.1rem;
	left: 14.5%;
	border-radius: 0.1rem;
	position: absolute;
}

`;

const Button = styled.button`
color: #fff;
background: rgba(229, 9, 20);
padding: 1rem;
margin-top: 5%;
margin-bottom: 5%;
outline: none;
border: 0;
border-radius: 0.25rem;
font-size: 1rem;
transition: opacity 0.2s ease-in;
cursor: pointer;
text-decoration: none;
box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
text-align: center;


`;