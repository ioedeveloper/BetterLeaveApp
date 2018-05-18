import { NextFunction, Request, Response, Router } from "express";

import * as apiController from "../controllers/apiController";

class Api {
  public router: Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init():void {
    this.router.get("/", apiController.getApi);
  }
}

const apiRoutes:Api = new Api();
export {apiRoutes};