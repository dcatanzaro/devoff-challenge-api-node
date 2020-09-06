const axios = require("axios");

class PlanetsService {
    constructor() {
        this.url = "https://swapi.dev";
    }

    getPlanet = async (id) => {
        const planet = await axios(`${this.url}/api/planets/${id}/`);

        const body = {
            name: planet.data.name,
            terrain: planet.data.terrain,
        };

        return body;
    };
}

module.exports = PlanetsService;
