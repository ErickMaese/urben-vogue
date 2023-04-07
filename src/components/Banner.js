import React from "react";
import "./BannerStyles.css";

const Banner = () => {
	return (
		<div className="banner">
			<h4>Repair services</h4>
			<h2>
				Up to <span>70% Off </span> - All T-Shits & Accessories
			</h2>
			<button className="btn">Explore More</button>
		</div>
	);
};

export default Banner;
