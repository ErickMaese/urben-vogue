import React from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
	return (
		<div className="header">
			<Link to="/">
				<h1 className="logo">Urban Vogue</h1>
			</Link>
			<ul className="nav-menu">
				<li>
					<Link className="active" to="/">Home</Link>
				</li>
				<li>
					<Link to="/shop">Shop</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/cart">
						<BiShoppingBag size={20}/>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
