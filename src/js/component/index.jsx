import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./home.jsx";
import List from "./List.jsx";

//create your first component
const Index = () => {
	return (
		<div>
			<BrowserRouter basename="/">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route exact path="/list">
						<List />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Index;
