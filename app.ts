import express = require("express");
import bodyParser = require("body-parser");
import path = require("path");
import * as apiCtrl from "./controllers/apiController";
import { apiRoutes } from "./routes/api";

// create app db connection
