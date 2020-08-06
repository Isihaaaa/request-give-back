const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const appRoutes = require("./routes/routes");

app.use(bodyParser.json());
app.use("/", appRoutes);

app.listen(3000);
