import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import PPComponent from "../components/PPComponent";
import Product from "../components/Product";

const ProductPage = () => {
	return (
		<div>
			<Navbar />
			<PPComponent />
			<Product/>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default ProductPage;
