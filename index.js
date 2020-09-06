const express = require("express");
const app = express();

const routes = require("./routes.js");

const port = 3000;

routes(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
