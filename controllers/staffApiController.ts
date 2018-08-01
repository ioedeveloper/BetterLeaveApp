// importing libraries and dependencies
import { Request, Response } from "express";
import { StaffService } from "../services/staffService";
import { StaffViewModel } from "../view_models/staffViewModel";

/**
 * SignUp Staff
 * @param req
 * @param res
 */
 export let staffSignUp:any = async (req: Request, res: Response) => {
   console.log("New User");
   let newStaff:StaffViewModel = new StaffViewModel(req.body.fname, req.body.lname, req.body.mname, req.body.role, req.body.staffId);
   let staffService:StaffService = new StaffService();
   staffService.addNewStaff(newStaff);
};
