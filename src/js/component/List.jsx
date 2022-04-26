import React, { useState, useEffect } from "react";
import {
	ListGroup,
	ListGroupItem,
	Pagination,
	PaginationItem,
	PaginationNext,
	PaginationPrev,
	Button,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { people } from "../apiStarWars.js";
import { Link } from "react-router-dom";

const List = () => {
	var [data, setData] = useState([]);
	var [page, setPage] = useState(1);
	var [pages, setPages] = useState(1);
	var [paginationItems, setPaginationItems] = useState([]);

	function irAPagina(id) {
		people.getQuery(id).then((data) => {
			console.log("Cargando pagina ... ", id);
			// Se actualizan los valores del estado
			setData(data.results);
			setPage(id);
			// Esta actualizacion tiene un hook
			setPages(data.total_pages);
			console.log("Cargada pagina ", id);
		});
	}

	function siguientePagina() {
		if (page < pages) {
			irAPagina(page + 1);
		}
	}

	function previaPagina() {
		if (1 < page) {
			irAPagina(page - 1);
		}
	}

	useEffect(() => {
		console.log("Componente montado");
		irAPagina(1);
		return () => {
			console.log("Componente desmontado");
		};
	}, []);

	useEffect(() => {
		console.log("Actualizando paginas");
		actualizarPaginacion();
		return () => {
			console.log("Finalizada la actualizacion de paginas");
		};
	}, [pages]);

	function getItems() {
		if (!data) return;
		return data.map((person) => {
			return (
				<ListGroup.Item key={person.uid}>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" width="180" height="100" />
						<Card.Body>
							<Card.Title>{person.name}</Card.Title>
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
				</ListGroup.Item>
			);
		});
	}

	function actualizarPaginacion() {
		var tmp = [];
		for (let i = 1; i <= pages; i++) {
			tmp.push(
				<Pagination.Item
					onClick={() => irAPagina(i)}
					key={i}
					active={i === page}>
					{i}
				</Pagination.Item>
			);
		}
		setPaginationItems(tmp);
	}

	return (
		<div>
			<ListGroup horizontal style={{ overflowX: "scroll" }}>
				{getItems()}
			</ListGroup>
			<Pagination>
				<Pagination.Prev onClick={previaPagina} />
				{paginationItems}
				<Pagination.Next onClick={siguientePagina} />
			</Pagination>
		</div>
	);
};
export default List;
