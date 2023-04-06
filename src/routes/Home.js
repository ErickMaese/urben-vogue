import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Product from "../components/Product";
import Footer from "../components/Footer";
// import Hero1 from'../assets/hero1.png'

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero
				// img={Hero1}
				h4Tage="Trade-in-offer"
				h2Tage="Super value deals"
				h1Tage="On all products"
				pTage="Save more with coupons & up to 70% off!"
			/>
			<Feature />
			<Product />
      <Footer />
		</div>
	);
};

export default Home;
