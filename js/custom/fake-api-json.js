"use strict";

let FAKE_API_JSON = {};
GBL.API.FAKE[`/Manager/SelectGatewayInfoPage`] = true;
FAKE_API_JSON[`/Manager/SelectGatewayInfoPage`] = {
    "result": true,
    "extra": null,
    "error": 0,
    "message": null,
    "remoteIp": null,
    "totalCount": 0,
    "gatewayInfoList": null
}
GBL.API.FAKE[GBL.API.URL.ACCOUNT.LOGIN] = true;
FAKE_API_JSON[GBL.API.URL.ACCOUNT.LOGIN] = {
    "result": true,
    "extra": null,
    "error": 0,
    "message": null,
    "remoteIp": "123.143.78.43",
    "accessToken": "SEERS_zaid.yoon_20231130115118333_2K9N9P5T_TOKEN_WEB",
    "userAccount": {
        "id": "zaid.yoon",
        "password": null,
        "organizationCode": "SEERS",
        "userCode": "SEERS_zaid.yoon",
        "employeeCode": null,
        "department": null,
        "position": null,
        "level": 8,
        "name": "zaid",
        "phoneNumber": "01073665332",
        "email": "zaid.yoon@seerstech.com",
        "status": 0,
        "dateTime": "2021-12-28 12:23:27",
        "gmtCode": "GMT+0900",
        "timezone": "Asia/Seoul",
        "updateDateTime": null,
        "lastUpdatePwDateTime": "2021-12-28 12:23:27",
        "modifyPwAlertDateTime": null,
        "deactivateDateTime": null,
        "organizationName": "씨어스테크놀로지",
        "profilePhotoUrl": null,
        "accountType": 0,
        "fireStationAddressId": 0,
        "wardSimple": null
    },
    "organization": {
        "organizationId": 74,
        "organizationCode": "SEERS",
        "organizationName": "씨어스테크놀로지",
        "countryCode": "Ko",
        "countryName": "Korea",
        "state": "Gyeonggi-do",
        "city": "Sujeong-gu, Seongnam-si",
        "address": "76, Bokjeong-ro",
        "latitude": 37.380262,
        "longitude": 127.115272,
        "phoneNumber": "+8224947582",
        "level": 10,
        "expiration": 0,
        "expirationDateTime": "2220-10-27 12:04:24",
        "dateTime": "2021-12-28 17:37:24",
        "gmtCode": "GMT+0900",
        "timezone": "Asia/Seoul",
        "etc": "Seerstech",
        "organizationType": 0,
        "strokeType": 0,
        "navigationInfo": null
    },
    "apiServerInfoList": null,
    "wardSimpleList": null,
    "wardSimple": null,
    "emergencyTransportPatientInfo": null,
    "loginFailCount": 0,
    "loginFailMaxCount": 0,
    "doctorDepartment": null,
    "brainSaverPatient": null,
    "fireStationAddress": null
}
GBL.API.FAKE[GBL.API.URL.ACCOUNT.LOGOUT] = true;
FAKE_API_JSON[GBL.API.URL.ACCOUNT.LOGOUT] = {
    "result": true,
    "extra": null,
    "error": 0,
    "message": null,
    "remoteIp": null
}