import React, { Component } from 'react';
import Mobile from "../images/mobile-0819.jpg"
import "../css/MiddleNav2.css";


 class MiddleTab2 extends Component {
	render() {
		return (
			<div className="download">
			<img className="stranger-things" src={Mobile} alt=""/>
				<div className="download-text">
				<h1 className="download-h1">Download your shows < br /> to watch on the go.</h1>
				<h2>Save your data and watch all your favorites <br /> offline.</h2>
				</div>


			</div>
		);
	}
}
export default MiddleTab2