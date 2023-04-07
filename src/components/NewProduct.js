import React from "react";
import "./ProductStyles.css";
import ProductCard from "./ProductCard";
import NewProductData from "./NewProductData";
// import f1 from "../assets/product/f1.jpg";
// import { BsStar } from "react-icons/bs";


const NewProduct = () => {
	return (
		<div className="product">
			<h2>New Arrivals</h2>
			<p>Summer Collection New design</p>
			<div className="pro-container">
				{NewProductData.map((val, index) => {
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

export default NewProduct;