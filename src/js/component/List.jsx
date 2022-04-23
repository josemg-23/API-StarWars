import React, { useState, useEffect } from "react";
import {
	ListGroup,
	ListGroupItem,
	Pagination,
	PaginationItem,
	PaginationNext,
	PaginationPrev,
} from "react-bootstrap";
import { people } from "../apiStarWars.js";
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
			if (!ocupado) irAPagina(page + 1);
		}
	}

	function previaPagina() {
		if (1 < page) {
			if (!ocupado) irAPagina(page - 1);
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
				<ListGroup.Item key={person.uid}>{person.name}</ListGroup.Item>
			);
		});
	}

	function actualizarPaginacion() {
		var tmp = new Array(pages);
		tmp.fill(1);
		setPaginationItems(
			tmp.map((val, i) => {
				return (
					<Pagination.Item
						onClick={() => irAPagina(i + 1)}
						key={i + 1}
						active={i + 1 === page}>
						{i + 1}
					</Pagination.Item>
				);
			})
		);
	}

	return (
		<div>
			<ListGroup variant="flush">{getItems()}</ListGroup>
			<Pagination>
				<Pagination.Prev onClick={previaPagina} />
				{paginationItems}
				<Pagination.Next onClick={siguientePagina} />
			</Pagination>
		</div>
	);
};
export default List;
