import React from "react";
import "./ProductStyles.css";
import ProductCard from "./ProductCard";
import ProductData from "./ProductData";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
// import f1 from "../assets/product/f1.jpg";
// import { BsStar } from "react-icons/bs";

const Product2 = () => {
	return (
		<div className="product">
			<Link to="/product" className="pro-container">
				{ProductData.map((val, index) => {
					return (
						<ProductCard
							key={index}
							imgsrc={val.imgsrc}
							brand={val.brand}
							name={val.name}
							price={val.price}
						/>
					);
				})}
			</Link>
			<div className="pagination">
				<Link to="/product2">1</Link>
				<Link to="/product2">2</Link>
			<Link id="arrow" to="/product2"><MdOutlineKeyboardDoubleArrowRight fontSize="16px" fontWeight="600"/></Link>
			</div>
		</div>
	);
};

export default Product2;

// <div className="pro">
// 					<img src={f1} alt="" />
// 					<div className="des">
// 						<span>adidas</span>
// 						<h5>Cartoon Astronaut T-Shirts</h5>
// 						<div className="star">
// 							<BsStar className="stars" />
// 						</div>
// 						<h4>$80</h4>
// 					</div>
// 					<a href="/">
// 						<FiShoppingCart className="cart"/>
// 					</a>
// 				</div>
