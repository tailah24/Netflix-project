import React, {Component} from "react";
import Header from "../components/Header"
import MiddleTab1 from "../components/MiddleTab1"
import MiddleTab2 from "../components/MiddleTab2"
import MiddleTab3 from "../components/MiddleTab3"
import Faqs from "../components/Faqs"
import Footer from "../components/Footer"


class Main extends Component {
	render() {
		return(
			<div>
				< Header />
				< MiddleTab1 />
				< MiddleTab2 />
				< MiddleTab3 />
				<Faqs />
				<Footer />

			</div>

			);
	}
}
export default Main;