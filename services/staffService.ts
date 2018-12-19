// importing libraries and dependencies
import { StaffDataService } from "./staffDataService";
import {StaffViewModel} from "../view_models/staffViewModel";
import {Staff} from "../models/staff";
import {Role} from "../models/Role";

/**
 * Handles all leave operations
 */
export class StaffService {
    private _data: StaffDataService;

    constructor() {
        this._data = new StaffDataService();
    }

    public async addNewStaff(staffData:StaffViewModel): Promise<Staff> {
        let staff: Staff = new Staff();
        staff.firstname = staffData.firstname;
        staff.lastname = staffData.lastname;
        staff.email = staffData.email;
        staff.password = staffData.password;
        let newstaff:Staff = await this._data.saveNewStaff(staff);
        return newstaff;
    }
}
