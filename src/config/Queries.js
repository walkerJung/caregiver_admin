import { gql } from "@apollo/client";

export const USER_LIST_QUERY = gql`
  query listUser {
    listUser {
      users {
        code
        userId
        userType
        userName
        sex
        phone
      }
    }
  }
`;

export const USER_DETAIL_QUERY = gql`
  query viewProfile($code: Int!) {
    viewProfile(code: $code) {
      userId
      userType
      userName
      sex
      phone
      createdAt
      CaregiverInfo {
        userCode
        address
        addressDetail
        residentNumber
        idCard
        bankInfo
        smoke
        drink
        mealCare
        urineCare
        suctionCare
        moveCare
        bedCare
      }
    }
  }
`;
