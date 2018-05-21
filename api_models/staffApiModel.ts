import { Staff } from "../models/staff";

// importing libraries and dependencies

/**
 * Handles the shape of the staff api
 */
export class StaffApiModel {
    // tslint:disable-next-line:max-line-length
    constructor(public firstname: string, public lastname: string, public middlename:string, public role:string, public staffIdNumber:string) {

    }
}