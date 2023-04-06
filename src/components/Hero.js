import React, { Component } from "react";
import "./HeroStyles.css";
import { Link } from "react-router-dom";

class Hero extends Component {
	render() {
		return (
			<div className="hero-containor">
				<div className="hero">
					<h4>{this.props.h4Tage}</h4>
					<h2>{this.props.h2Tage}</h2>
					<h1>{this.props.h1Tage}</h1>
					<p>{this.props.pTage}</p>
                    <Link to="/shop">
                    <button>Shop Now</button>
                    </Link>

				</div>
			</div>
		);
	}
}

export default Hero;
