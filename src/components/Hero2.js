import React, { Component } from "react";
import "./Hero2Styles.css";


class Hero2 extends Component {
	render() {
		return (
			<div className="hero2-containor">
				<div className="hero2">
					<h2>{this.props.h2Tage}</h2>
					<p>{this.props.pTage}</p>

				</div>
			</div>
		);
	}
}

export default Hero2;
