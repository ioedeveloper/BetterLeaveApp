// importing libraries and dependencies
import { NextFunction, Request, Response, Router } from "express";
import * as apiController from "../controllers/leaveApiController";

/**
 * Handles routing of api request
 */
class Api {
  public router: Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init():void {
    this.router.get("/allLeaves", apiController.getAllLeaves);
  }
}

const apiRoutes:Api = new Api();
export {apiRoutes};
