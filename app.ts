// importing libraries and dependencies
import express = require("express");
import bodyParser = require("body-parser");
import path = require("path");
import { apiRoutes } from "./routes/leaveApi";
import {createConnection, Connection} from "typeorm";

// create app db connection.
createConnection().then(async connection => {
  console.log("Database Connection Established...");

  // create a new express application instance
const app: express.Application = express();

// the port the express app will listen on
const port:any = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", apiRoutes.router);

// serve the application at the given port
app.listen(port, () => {
    // success callback
    console.log(`Listening at http://localhost:${port}/`);
});

}).catch(error => console.log("Data Access Error : ", error));