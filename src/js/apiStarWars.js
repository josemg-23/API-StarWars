const baseUrl = "https://www.swapi.tech/api/people/";

const people = {
	getById: async (id) => {
		// Buscar un personaje por el id y retornar el objeto con los datos
		try {
			const resp = await fetch(`${baseUrl}${id}`);
			if (resp.ok) {
				let res = await resp.json();
				return {
					img: `https://starwars-visualguide.com/assets/img/characters/${res.result.uid}.jpg`,
					...res.result.properties,
				};
			}
			console.error(resp.status, resp.statusText);
			return [];
		} catch (error) {
			console.error("Error en la api", error);
			return [];
		}
	},
	getQuery: async (page = 1, limit = 10) => {
		// Ejemplo de peticion https://www.swapi.tech/api/people?limit=20&page=2
		try {
			const resp = await fetch(`${baseUrl}?limit=${limit}&page=${page}`);
			if (resp.ok) {
				let res = await resp.json();
				res.results = res.results.map((person) => {
					return {
						img: `https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`,
						...person,
					};
				});
				return res;
			}
			console.error(resp.status, resp.statusText);
			return [];
		} catch (error) {
			console.error("Error en la api", error);
			return [];
		}
	},
};

export { people };
