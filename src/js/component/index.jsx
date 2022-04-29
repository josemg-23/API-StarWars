import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home.jsx";
import Layout from "./Layout.jsx";
import List, { People } from "./people";

//create your first component
const Index = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="personas" element={<List />} />
						<Route path="personas/:id" element={<People />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Index;
