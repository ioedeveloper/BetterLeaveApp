// importing libraries and dependencies
import { NextFunction, Request, Response, Router } from "express";
import * as leaveApiController from "../controllers/leaveApiController";

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
class StaffApi {
  public router:Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init():void {
    this.router.post("/staffSignUp", );
  }
}

const leaveApiRoutes:LeaveApi = new LeaveApi();
export {leaveApiRoutes};
