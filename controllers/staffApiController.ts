// importing libraries and dependencies
import { Request, Response } from "express";
import { StaffService } from "../services/staffService";
import { StaffViewModel } from "../view_models/staffViewModel";
import { response } from "../types/api";

/**
 * SignUp Staff
 * @param req
 * @param res
 */
 export let signup:any = async (req: Request, res: Response) => {
   let newStaff:StaffViewModel = new StaffViewModel(req.body.firstname, req.body.lastname, req.body.email, req.body.password);
   let staffService:StaffService = new StaffService();

   staffService.addNewStaff(newStaff).then(() => {
     let response:response = {
        message:"Staff Created Successfully!"
     };
      res.status(200).send(response);
   }).catch((error) => {
     console.log("Error: " + error);
   });
};
