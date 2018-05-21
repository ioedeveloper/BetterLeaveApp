import { Staff } from "../models/staff";

// importing libraries and dependencies

/**
 * Handles the shape of the organisation api
 */
export class OrganisationApiModel {
    constructor(public organizationName: string, public organizationAddress: string, public organizationDescription?: string) {

    }
}