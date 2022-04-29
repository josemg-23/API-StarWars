import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { people } from "../../apiStarWars.js";
import Card from "react-bootstrap/Card";

const People = () => {
	const params = useParams();
	const [person, setPerson] = useState({});
	people.getById(params.id).then((res) => setPerson(res));
	// useEffect(() => {}, [person]);
	function getPerson() {
		return (
			<Card style={{ width: "18rem" }}>
				<Card.Img
					src={person.img}
					variant="top"
					width="180"
					height="100"
				/>
				<Card.Body>
					<Card.Title>{person.name}</Card.Title>
					<h5>{person.description}</h5>
					<h5>Genero: {person.gender}</h5>
					<h5>Cabello: {person.hair_color}</h5>
					<h5>Ojos: {person.eye_color}</h5>
					<Link
						className="btn btn-primary"
						to={`/personas/${person.uid}`}>
						Leer Mas
					</Link>
					{/* <Button variant="primary">Leer más</Button> */}
				</Card.Body>
			</Card>
		);
	}

	return (
		<div>
			<pre>{JSON.stringify(person)}</pre>
			{getPerson()}
		</div>
	);
};

export default People;
