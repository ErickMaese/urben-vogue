import React from "react";
import f1 from "../assets/product/f1.jpg";
import f2 from "../assets/product/f2.jpg";
import f3 from "../assets/product/f3.jpg";
import f4 from "../assets/product/f4.jpg";
import "./PPComponentStyles.css";

const PPComponent = () => {

    // const mainImg = document.getElementById("mainImg");
    // const smallImg = document.getElementsByClassName("small-img");

    // const clicked = () => {
    //     mainImg.src = smallImg.src
    // }

    // smallImg[0].onclick = function(){
    //     mainImg.src = smallImg[0].src
    // }
    // smallImg[1].onclick = function(){
    //     mainImg.src = smallImg[1].src
    // }
    // smallImg[2].onclick = function(){
    //     mainImg.src = smallImg[2].src
    // }
    // smallImg[3].onclick = function(){
    //     mainImg.src = smallImg[3].src
    // }

	return (
		<div className="product-detail">
			<div className="single-pro-img">
				<img src={f1} width="100%" id="mainImg" alt="" />
				<div className="small-img-group">
					<div className="small-img-col">
						<img src={f1} width="100%" className="small-img" alt="" />
					</div>
					<div className="small-img-col">
						<img src={f2} width="100%" className="small-img" alt="" />
					</div>
					<div className="small-img-col">
						<img src={f3} width="100%" className="small-img" alt="" />
					</div>
					<div className="small-img-col">
						<img src={f4} width="100%" className="small-img" alt="" />
					</div>
				</div>
			</div>
			<div className="single-page-details">
				<h6>Home / T-Shirt</h6>
				<h4>Men's Fashion T-Shirt</h4>
				<h2>$139.99</h2>
				<select>
					<option>Select Size</option>
					<option>S</option>
					<option>M</option>
					<option>L</option>
					<option>XL</option>
					<option>XXL</option>
					<option>XXXL</option>
				</select>
				<input type="number" value="1" />
				<button className="btn">Add To Cart</button>
				<h4>Product Details</h4>
				<span>
					Design: The t-shirt features a classic crew neck design with short
					sleeves and a straight hemline. It has a seamless collar and
					double-needle stitching throughout for added durability. The fabric is
					soft and breathable, making it comfortable to wear in any season. Care
					Instructions: Machine washable in cold water, tumble dry low. Do not
					bleach or iron the printed design. Additional Information: This
					t-shirt is perfect for everyday wear and can be dressed up or down. It
					can be worn as a standalone piece or layered under a jacket or
					sweater. All size fits true to size and is suitable for most body
					types. Overall, this t-shirt is a great addition to any wardrobe and
					is sure to become a staple item.
				</span>
			</div>
		</div>
	);
};

export default PPComponent;
