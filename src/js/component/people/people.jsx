import React from "react";
import { useParams } from "react-router-dom";

const People = () => {
	const people = useParams();
	return <h1>{params.id}</h1>;
};
export default People;
