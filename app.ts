// importing libraries and dependencies
import { Request, Response } from "express";
import express = require("express");
import bodyParser = require("body-parser");
import path = require("path");
import * as apiRoutes from "./routes/api";
import {createConnection} from "typeorm";

// create app db connection.
createConnection().then(() => {
  console.log("Database Connection Established...");

  // create a new express application instance
const app: express.Application = express();

// the port the express app will listen on
const port:any = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/leave", apiRoutes.leaveApiRoutes.router);
app.use("/api/user", apiRoutes.userApiRoutes.router);

app.get("/", (req:Request, res:Response) => {
  return res.status(200).send("Welcome to better leave app");
});

// serve the application at the given port
app.listen(port, () => {
    // success callback
    console.log(`Listening at http://localhost:${port}/`);
});

}).catch(error => console.log("Error: "+error));