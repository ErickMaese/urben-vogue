import React from "react";
import "./ProductStyles.css";
import ProductCard from "./ProductCard";
import FeaturedProductData from "./FeaturedProductData";
// import f1 from "../assets/product/f1.jpg";
// import { BsStar } from "react-icons/bs";


const Product = () => {
	return (
		<div className="product">
			<h2>Featured Product</h2>
			<p>Summer Collection New design</p>
			<div className="pro-container">
				{FeaturedProductData.map((val, index) => {
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

			</div>
		</div>
	);
};

export default Product;

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
