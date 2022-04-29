import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home.jsx";
import Layout from "./Layout.jsx";
import ListPeople, { People } from "./people";
import Listplanets, { Planets } from "./planets";

//create your first component
const Index = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="personas" element={<ListPeople />} />
						<Route path="personas/:id" element={<People />} />
						<Route path="planets" element={<Listplanets />} />
						<Route path="planets/:id" element={<Planets />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Index;
