// importing libraries and dependencies
import { NextFunction, Request, Response } from "express";
import { LeaveDataService } from "../services/leaveDataService";
import { LeaveIndexApiModel } from "../api_models/leaveIndexApiModel";
import { Leave } from "../models/leave";

/**
 * GET /api
 * List of API examples.
 */
export let getApi:any = (req: Request, res: Response) => {
  res.send({
    title: "BETTER LEAVE APP API",
  });
  return;
};


/**
 * Get All Leaves
 * @param req
 * @param res
 */
export let getAllLeaves:any = async (req: Request, res: Response) => {
    const dataService: LeaveDataService = new LeaveDataService();
    let result:Array<Leave> = await dataService.getAllLeaves();
    let viewresult:Array<LeaveIndexApiModel> = new Array<LeaveIndexApiModel>();

    result.forEach(leave => {
        let apmodel:LeaveIndexApiModel =
        new LeaveIndexApiModel(leave.leaveType.name, `${leave.staff.firstname} ${leave.staff.lastname}`, leave.id);
        viewresult.push(apmodel);
    });


    return res.status(200).send(viewresult);
};
