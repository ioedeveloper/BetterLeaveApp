// importing libraries and dependencies
import { NextFunction, Request, Response } from "express";
import { StaffDataService } from "../services/staffDataService";
import { StaffViewModel } from "../view_models/staffViewModel";
import { Staff } from "../models/staff";

/**
 * SignUp Staff
 * @param req
 * @param res
 */
 export let staffSignUp:any = async (req: Request, res: Response) => {
   let newStaff:StaffViewModel = new StaffViewModel(req.body.fname, req.body.lname, req.body.mname, req.body.role, req.body.staffId);

};
