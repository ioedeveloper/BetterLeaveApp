import { LeaveDataService } from "./leaveDataService";
import {Leave} from "../models/leave";

// leave configuration
export class LeaveService {
    private _data: LeaveDataService;

    constructor() {
        this._data = new LeaveDataService();
    }

    public setLeaveDayAmount(amountofdays: number): void {
        let newleave: Leave = new Leave();
        this._data.applyForLeave(newleave);
    }
}
