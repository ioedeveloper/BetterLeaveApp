// importing libraries and dependencies
import {Staff} from "../models/staff";
import { Repository, getRepository, Connection, getConnection } from "typeorm";
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
     * saveNewStaff
     */
    public async saveNewStaff(staff:Staff): Promise<Staff> {

        const newstaff: Staff = await this._db.create(staff);

        return newstaff;
    }
}
