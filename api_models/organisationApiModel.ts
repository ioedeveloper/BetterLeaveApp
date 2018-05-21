// importing libraries and dependencies

/**
 * Handles the shape of the organisation api
 */
export class OrganisationApiModel {
    // tslint:disable-next-line:max-line-length
    constructor(public organizationName: string, public organizationAddress: string, public organizationDescription?: string, public admin:Staff) {

    }
}