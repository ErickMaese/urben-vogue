import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import NewProduct from "../components/NewProduct";
import Banner2 from "../components/Banner2";
import Banner3 from "../components/Banner3";
import Newsletter from "../components/Newsletter";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero
				h4Tage="Trade-in-offer"
				h2Tage="Super value deals"
				h1Tage="On all products"
				pTage="Save more with coupons & up to 70% off!"
			/>
			<Feature />
			<Product />
			<Banner />
			<NewProduct />
			<Banner2 />
			<Banner3 />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
