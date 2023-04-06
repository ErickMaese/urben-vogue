import React from "react";
import "./ProductStyles.css";
import f1 from "../assets/product/f1.jpg";
import { AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Product = () => {
	return (
		<div className="product">
			<h2>Featured Product</h2>
			<p>Summer Collection New design</p>
			<div className="pro-container">
				<div className="pro">
					<img src={f1} alt="" />
					<div className="des">
						<span>adidas</span>
						<h5>Cartoon Astronaut T-Shirts</h5>
						<div className="star">
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
						</div>
						<h4>$80</h4>
					</div>
					<a href="#">
						<FiShoppingCart />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Product;
