// importing libraries and dependencies
import {Staff} from "../models/staff";
import { Repository, getRepository, Connection, getConnection } from "typeorm";
import { StaffViewModel } from "../view_models/staffViewModel";
import { Role } from "../models/Role";

/**
 * Handles a staff data access operations
 */
export class StaffDataService {
    private _db: Repository<Staff>;

    constructor() {
        this._db = getConnection().getRepository(Staff);

    }

    /**
     * addNewStaff
     */
    public addNewStaff(staffData: StaffViewModel): Staff {
        let staff: Staff = new Staff();

        staff.firstname = staffData.firstname;
        staff.lastname = staffData.lastname;
        staff.middlename = staffData.middlename;
        let role: Role = new Role();
        role.roleName = "HR";
        staff.role = role;

        const newstaff: Staff = this._db.create(staff);

        return newstaff;
    }
}
