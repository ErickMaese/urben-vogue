import React from "react";
import "./FeatureStyles.css";
import F1 from "../assets/features/f1.png";
import F2 from "../assets/features/f2.png";
import F3 from "../assets/features/f3.png";
import F4 from "../assets/features/f4.png";
import F5 from "../assets/features/f5.png";
import F6 from "../assets/features/f6.png";

const Feature = () => {
	return (
		<div className="feature">
			<div className="fe-box">
				<img src={F1} alt="" />
				<h6>Free Shipping</h6>
			</div>
            <div className="fe-box">
				<img src={F2} alt="" />
				<h6>Online order</h6>
			</div>
            <div className="fe-box">
				<img src={F3} alt="" />
				<h6>Sve Money</h6>
			</div>
            <div className="fe-box">
				<img src={F4} alt="" />
				<h6>Promotions</h6>
			</div>
            <div className="fe-box">
				<img src={F5} alt="" />
				<h6>Happy Sell</h6>
			</div>
            <div className="fe-box">
				<img src={F6} alt="" />
				<h6>24/7 Support</h6>
			</div>
		</div>
	);
};

export default Feature;
