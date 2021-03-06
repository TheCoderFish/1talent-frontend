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


export class EmployeeListFilterViewModel {
    constructor(
        public employeeName?: string,
        public employeeCode?: number,
        public approvedRelievingFromDate?: string,
        public approvedRelievingToDate?: string,
        public initiatedOnFromDate?: string,
        public initiatedOnToDate?: string,
        public status?: number,
    ) { }
}
