class PlanetsController {
    constructor(planetsInstance) {
        this.planetsInstance = planetsInstance;
    }

    getPlanet = async (req, res) => {
        const { id } = req.params;

        const planet = await this.planetsInstance.getPlanet(id);

        res.json(planet);
    };
}

module.exports = PlanetsController;
