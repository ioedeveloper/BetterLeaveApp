// importing libraries and dependencies
import {Staff} from "../models/staff";
import { Repository, getConnection } from "typeorm";
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
        let newStaff:Staff = await this._db.save(staff);
        return newStaff;
    }
}
