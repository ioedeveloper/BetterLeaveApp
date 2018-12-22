// importing libraries and dependencies
import { NextFunction, Request, Response, Router } from "express";
import * as leaveApiController from "../controllers/leaveApiController";
import * as staffApiController from "../controllers/staffApiController";

/**
 * Handles routing of leave api request
 */
class LeaveApi {
  public router: Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init():void {
    this.router.get("/allLeaves", leaveApiController.getAllLeaves);
  }
}

/**
 * Handles routing of staff api request
 */
class UserApi {
  public router:Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init():void {
    this.router.post("/signup", staffApiController.signup);
    this.router.post("/login", staffApiController.login);
  }
}

const leaveApiRoutes:LeaveApi = new LeaveApi();
const userApiRoutes:UserApi = new UserApi();
export {leaveApiRoutes, userApiRoutes};
