import React, { Component } from 'react';
import "../css/MiddleNav3.css"
import Devices from "../images/device-pile.png"

class MiddleTab3 extends Component {
	render() {
		return (
			<div className="watch">
				<div className="watch-text">
				<h1 className="watch-h1">Watch everywhere.</h1>
				<h2 className="watch-h2">Stream unlimited movies and TV shows on <br /> your phone, tablet, laptop, and TV without <br /> paying more.</h2>
				</div>
				<div>
				<img className="device-pile" src={Devices} alt=""/>

				</div>

			</div>
		);
	}
}
export default MiddleTab3