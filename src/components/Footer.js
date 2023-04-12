import React from "react";
import "./FooterStyles.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import appImg from "../assets/pay/app.jpg";
import playImg from "../assets/pay/play.jpg";
import payImg from "../assets/pay/pay.png";

const Footer = () => {
	return (
		<div className="footer-container">
    <h1 className="logo">Urban Vogue</h1>
			<div className="footer">
				<div className="contact">
					<h2>Contact</h2>
					<p>
						<strong>Address:</strong> 562 Wellington Road street 32, san
						Franciso
					</p>
					<p>
						<strong>Phone:</strong> 123.456.7890
					</p>
					<p>
						<strong>Hours:</strong> 10am - 7pm Mon - Sat
					</p>
					<div>
						<h2>Follow Us</h2>
						<div className="icons">
							<FaFacebookF className="fb" />
							<BsTwitter className="tw" />
							<BsInstagram className="ig" />
						</div>
					</div>
				</div>
				<div className="about">
					<h2>About</h2>
					<div>
						<p>About Us</p>
						<p>Delivery Information</p>
						<p>Privacy Policy</p>
						<p>Term & Conditions</p>
						<p>Contact Us</p>
					</div>
				</div>
				<div className="my-account">
					<h2>My Account</h2>
					<div>
						<p>Sign in</p>
						<p>View cart</p>
						<p>My Wishlist</p>
						<p>Track My Order</p>
						<p>Help</p>
					</div>
				</div>
				<div className="install-app">
					<h2>Install App</h2>
					<div>
						<p>From App Store or Google Play</p>
						<div className="row">
							<img src={appImg} alt="" />
							<img src={playImg} alt="" />
						</div>
						<p>Secured Payment Gateways</p>
						<img src={payImg} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
