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

    public addNewStaff(staffData:StaffViewModel): Promise<Staff> {
        let staff: Staff = new Staff();

        staff.firstname = staffData.firstname;
        staff.lastname = staffData.lastname;
        staff.middlename = staffData.middlename;
        staff.birthdate = staffData.birthdate;
        let role: Role = new Role();
        role.roleName = "HR";
        staff.role = role;
        let newstaff:Promise<Staff> = this._data.saveNewStaff(staff);
        return newstaff;
    }
}
