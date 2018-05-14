/**
 * LeaveController that will respond to all requests for leave for any staff
 */

import  express = require("express");
import { Request, Response } from "express";
import { LeaveDataService } from "../services/leaveDataService";
import { LeaveIndexApiModel } from "../api_models/leaveIndexApiModel";
import { Leave } from "../models/leave";



const dataService: LeaveDataService = new LeaveDataService();
//

export let index:any = async (req: Request, res: Response) => {
    let result:Array<Leave> = await dataService.getAllLeaves();
    let viewresult:Array<LeaveIndexApiModel> = new Array<LeaveIndexApiModel>();

    result.forEach(leave => {
        let apmodel:LeaveIndexApiModel =
        new LeaveIndexApiModel(leave.leaveType.name, `${leave.staff.firstname} ${leave.staff.lastname}`, leave.id);
        viewresult.push(apmodel);
    });


    return res.status(200).send(viewresult);
};