import { CaseDetailType } from "../types/caseDetail";

export const caseDetailMockData: CaseDetailType = {
    "caseId": "123456",
    "caseType": "accidental",
    "date": "2021-09-01",
    "time": "10:00 AM",
    "requestedSystem": "ICP_RSA",
    "isEv": false,
    "caseStatus": "Rejected",
    "service_charge":"400",
    "vehicleName": "Baleno",
    "address": "102-B, Phase 2, Tilak Nagar, New Delhi",
    "registrationNum": "DL3CBC3346",
    "customer_name": "Ravi Shankar",
    "caseCategory": "BATTERY PROBLEM",
    "caseDescription": "CAR NOT STARTING",    
    "caseFiles": [ "S3 url's" ],
    "technicianAssignment": {
        "name": "",
        "address": ""
    },
    "technicianStatus": {
        "visitingCharges": "",
        "postAssistanceVehicleIssue": "",
        "postAssistanceProvided": ""
    },
    "towingStatus": {
        "fee": "1300",
        "resolvedOnCallVehicleIssue": "Puncture",
        "resolvedOnCallAssistanceProvided": "Repair",
        "preTowingFiles": [
            "S3 file URL's"
        ],
        "postTowingFiles": [
            "S3 file URL's"
        ],
        "handoveFiles": [
            "S3 file URL's"
        ]
    }
}