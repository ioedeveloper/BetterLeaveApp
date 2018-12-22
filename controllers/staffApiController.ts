// importing libraries and dependencies
import { Request, Response } from "express";
import { StaffService } from "../services/staffService";
import * as StaffViewModel  from "../view_models/staffViewModel";
import {Staff} from "../models/staff";
import { response } from "../types/api";

/**
 * SignUp Staff
 * @param req
 * @param res
 */
let signup:any = async (req: Request, res: Response) => {
   let data:StaffViewModel.Signup = new StaffViewModel.Signup(req.body.firstname, req.body.lastname, req.body.email, req.body.password);
   let staffService:StaffService = new StaffService();

   try {
     let staff:Staff = await staffService.addNewStaff(data);
     res.status(200).send(staff);
   } catch(error) {
      res.status(400).send(error);
   }
};

let login:any = async (req: Request, res: Response) => {
  let data:StaffViewModel.Login = new StaffViewModel.Login(req.body.email, req.body.lastname);
  let staffService: StaffService = new StaffService();

  try {
    let staff:Staff = await staffService.login(data);
    res.status(200).send(staff);
  } catch(error) {
    res.status(400).send(error);
  }
};

export {signup, login};

