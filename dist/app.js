"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var apiRoutes = __importStar(require("./routes/api"));
var typeorm_1 = require("typeorm");
// create app db connection.
typeorm_1.createConnection().then(function () {
    console.log("Database Connection Established...");
    // create a new express application instance
    var app = express();
    // the port the express app will listen on
    var port = process.env.PORT || 8001;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use("/api/leave", apiRoutes.leaveApiRoutes.router);
    app.use("/api/user", apiRoutes.userApiRoutes.router);
    app.get("/", function (req, res) {
        return res.status(200).send("Welcome to better leave app");
    });
    // serve the application at the given port
    app.listen(port, function () {
        // success callback
        console.log("Listening at http://localhost:" + port + "/");
    });
}).catch(function (error) { return console.log("Error: " + error); });
//# sourceMappingURL=app.js.map