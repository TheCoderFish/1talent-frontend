/**
 * 1Talent Employee Exit CheckList Portal
 * Swagger contracts  Contains  Routes for  User Screen 2.3.1, 2.3.2, 2.3.3, 2.3.4, 2.3.5 and 2.3.6
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export class MyActivityViewModel {
    constructor(
        public resignationId?: number,
        public employeeName?: string,
        public approvedRelievingDate?: string,
        public initiatedOn?: string,
        public activityName?: string,
        public domainName?: string,
        public assignedName?: string,
        public lastUpdatedOn?: string,
        /**
         * This is the enum for status where 0 is pending, 1 is initiated etc
         */
        public status?: number,
    ) { }
}