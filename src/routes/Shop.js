import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from '../components/Newsletter';
import Hero2 from "../components/Hero2";
import Product2 from "../components/Product2";

const Shop = () => {
	return (
		<div>
			<Navbar />
			<Hero2
			h2Tage="#stayhome"
			pTage="Save more with coupons & up to 70% off!"
			/>
			<Product2/>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Shop