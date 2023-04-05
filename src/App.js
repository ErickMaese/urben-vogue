import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.js";
import Shop from "./routes/Shop.js";
import Blog from "./routes/Blog.js";
import About from "./routes/About.js";
import Contact from "./routes/Contact.js";
import Cart from "./routes/Cart.js";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
