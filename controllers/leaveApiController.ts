// importing libraries and dependencies
import { NextFunction, Request, Response } from "express";
import { LeaveDataService } from "../services/leaveDataService";
import { LeaveApiModel } from "../api_models/leaveApiModel";
import { Leave } from "../models/leave";

/**
 * Get All Leaves
 * @param req
 * @param res
 */
export let getAllLeaves:any = async (req: Request, res: Response) => {
    const dataService: LeaveDataService = new LeaveDataService();
    let result:Array<Leave> = await dataService.getAllLeaves();
    let viewresult:Array<LeaveApiModel> = new Array<LeaveApiModel>();

    result.forEach(leave => {
        let apmodel:LeaveApiModel =
        new LeaveApiModel(leave.leaveType.name, `${leave.staff.firstname} ${leave.staff.lastname}`, leave.id);
        viewresult.push(apmodel);
    });
    return res.status(200).send(viewresult);
};
