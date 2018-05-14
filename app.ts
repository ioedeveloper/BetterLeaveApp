import express = require("express");
import bodyParser = require("body-parser");
import path = require("path");
import * as apiCtrl from "./controllers/api";
import { Router } from "express-serve-static-core";
import { apiRouter } from "./routes/api";
import {} from "";
// create express server


// create app db connection.
class App {

    // ref to Express instance
    public express: express.Application;
    private readonly MongoStore = mongo(session);

    constructor() {
      this.express = express();
      this.middleware();
      this.routes();
      this.launchConf();

    }
    private middleware(): void {
      this.express.set("port", process.env.PORT || 3000);
      this.express.set("views", path.join(__dirname, "../views"));
      this.express.use(bodyParser.json());
      this.express.use(bodyParser.urlencoded({ extended: true }));
      this.express.use(session({
        resave: true,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET,
        store: new this.MongoStore({
          autoReconnect: true,
          url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
        }),
      }));
      this.express.use((req, res, next) => {
        res.locals.user = req.user;
        next();
      });
      this.express.use((req, res, next) => {
        // after successful login, redirect back to the intended page
        if (!req.user &&
          req.path !== "/login" &&
          req.path !== "/signup" &&
          !req.path.match(/^\/auth/) &&
          !req.path.match(/\./)) {
          req.session.returnTo = req.path;
        } else if (req.user &&
          req.path === "/account") {
          req.session.returnTo = req.path;
        }
        next();
      });
      this.express.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
    }
    /**
     * Primary app routes.
     */
    private routes(): void {
      this.express.use("/", routes);
    }

    private launchConf() {
      // mongoose.Promise = global.Promise;
      mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);

      mongoose.connection.on("error", () => {
        // tslint:disable-next-line:no-console
        console.log("MongoDB connection error. Please make sure MongoDB is running.");
        process.exit();
      });

      this.express.use(errorHandler());

      /**
       * Start Express server.
       */
      this.express.listen(this.express.get("port"), () => {
        // tslint:disable-next-line:no-console
        console.log(("  App is running at http://localhost:%d \
        in %s mode"), this.express.get("port"), this.express.get("env"));
        // tslint:disable-next-line:no-console
        console.log("  Press CTRL-C to stop\n");
      });
    }
  }

  export default new App().express;
