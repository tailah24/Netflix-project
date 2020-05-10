import React, { Component } from 'react';
import Tv from "../images/tv.png";
import "../css/MiddleNav.css";


class MiddleTab1 extends Component {
	render() {
		return (
			<div className="middle">
				<div className="enjoy">
				<div className="enjoy-tv">
				<h1 className="enjoy-h1">Enjoy on your TV.</h1>
				<h2 className="enjoy-h2">Watch on Smart TVs, Playstation, Xbox, <br /> Chromecast, Apple TV, Blu-ray players, and <br />more.</h2>
				</div>
				<img className="tv-remote" src={Tv} alt=""></img>
				</div>

			</div>
		);
	}
}
export default MiddleTab1


