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
				<Card.Img src={person.img} variant="top" height="300" />
				<Card.Body>
					<Card.Title>{planet.name}</Card.Title>
					<h5>{planet.description}</h5>
					<h5>Genero: {planet.gender}</h5>
					<h5>Cabello: {planet.hair_color}</h5>
					<h5>Ojos: {planet.eye_color}</h5>
				</Card.Body>
			</Card>
		);
	}

	return (
		<div>
			<pre>{JSON.stringify(person)}</pre>
			{getPlanet()}
		</div>
	);
};

export default Planets;