import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { BiShoppingBag } from "react-icons/bi";
import { TiThMenuOutline, TiTimesOutline } from "react-icons/ti";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<div className="header">
			<Link to="/">
				<h1 className="logo">Urban Vogue</h1>
			</Link>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<TiTimesOutline className="close" onClick={handleClick}/>
				<li>
					<Link  to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className="active" to="/shop">Shop</Link>
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
					<Link className="bag" to="/cart">
						<BiShoppingBag  size={20} />
					</Link>
				</li>
			</ul>
			<div className="mobile">
				<Link to="/cart">
					<BiShoppingBag  size={24} />
				</Link>
				<div className="hamburger">
					<TiThMenuOutline className="bar" size={20} onClick={handleClick}/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
