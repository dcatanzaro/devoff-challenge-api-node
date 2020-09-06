module.exports = (app) => {
    const PlanetsService = require("./services/PlanetsService");
    const PlanetsInstance = new PlanetsService();

    const PlanetsController = require("./controllers/PlanetsController");
    const PlanetsInstanceController = new PlanetsController(PlanetsInstance);

    app.get("/api/planet/:id", PlanetsInstanceController.getPlanet);

    app.get("/", (req, res) => {
        res.sendFile(`${__dirname}/index.html`);
    });
};
