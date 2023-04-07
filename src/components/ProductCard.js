import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = (props) => {
	return (
		<div>
			<div className="pro">
				<img src={props.imgsrc} alt="" />
				<div className="des">
					<span>{props.brand}</span>
					<h5>{props.name}</h5>
					<h4>{props.price}</h4>
				</div>
                <a href="/">
					<FiShoppingCart className="cart" />
				</a>
			</div>
		</div>
	);
};

export default ProductCard;
