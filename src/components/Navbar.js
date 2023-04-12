import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { BiShoppingBag } from "react-icons/bi";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<div className="header">
			<Link to="/">
				<h1 className="logo">Urban Vogue</h1>
			</Link>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li>
					<Link className="active" to="/">
						Home
					</Link>
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
						<BiShoppingBag size={20} />
					</Link>
				</li>
			</ul>
			<div className="mobile">
				<Link to="/cart">
					<BiShoppingBag size={24} />
				</Link>
				<div className="hamburger" onClick={handleClick}>
					<TiThMenuOutline className="bar" size={20} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
