import { LeaveDataService } from "./leaveDataService";
import {Leave} from "../models/leave";
import { Connection } from "typeorm";

// leave configuration
export class LeaveService {
    private _data: LeaveDataService;

    constructor(con: Connection) {
        this._data = new LeaveDataService(con);
    }

    public setLeaveDayAmount(amountofdays: number): void {
        let newleave: Leave = new Leave();
        this._data.applyForLeave(newleave);
    }
}
