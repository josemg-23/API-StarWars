import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { planets } from "../../apiStarWars.js";
import Card from "react-bootstrap/Card";

const Planets = () => {
	const params = useParams();
	const [planet, setPlanet] = useState({});
	planets.getById(params.id).then((res) => setPlanet(res));
	// useEffect(() => {}, [person]);
	function getPlanet() {
		return (
			<Card style={{ width: "18rem" }}>
				<Card.Img src={planet.img} variant="top" height="300" />
				<Card.Body>
					<Card.Title>{planet.name}</Card.Title>
					<h5>Climate:{planet.climate}</h5>
					<h5>Diameter: {planet.diameter}</h5>
					<h5>Population: {planet.population}</h5>
					<h5>Terrain: {planet.terrain}</h5>
				</Card.Body>
			</Card>
		);
	}

	return (
		<div>
			<pre>{JSON.stringify(planet)}</pre>
			{getPlanet()}
		</div>
	);
};

export default Planets;
