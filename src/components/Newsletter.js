import React from "react";
import "./NewsletterStyles.css";

const Newsletter = () => {
	return (
		<div className="newsletter">
			<div className="news-texts">
				<h2>Sign Up Newsletters</h2>
				<h4>
					Get E-mail updates about our latest shop and{" "}
					<span>special offers.</span>
				</h4>
			</div>
			<div className="form">
				<input type="text" placeholder="Your email address" />
				<button className="btn">Sign Up</button>
			</div>
		</div>
	);
};

export default Newsletter;
