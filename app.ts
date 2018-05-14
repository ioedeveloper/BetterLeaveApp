import express = require("express");
import bodyParser = require("body-parser");
import path = require("path");
import * as apiCtrl from "./controllers/apiController";
import { apiRoutes } from "./routes/api";
import {createConnection, Connection} from "typeorm";

createConnection().then(async connection (connection) => {

});
// create app db connection