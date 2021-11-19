import { gql } from "@apollo/client";

// 로그인
export const LOGIN_MUTATION = gql`
  mutation login($userId: String!, $password: String!) {
    login(userId: $userId, password: $password) {
      ok
      token
      error
    }
  }
`;

// 유저 관리
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

export const USER_DELETE_MUTATION = gql`
  mutation deleteAccount($code: Int!) {
    deleteAccount(code: $code) {
      ok
    }
  }
`;

// 공고 관리
export const ANNOUNCEMENT_LIST_QUERY = gql`
  query listAnnouncement {
    listAnnouncement {
      announcements {
        status
        userCode
        needMealCare
        needUrineCare
        needSuctionCare
        needMoveCare
        needBedCare
        needHygieneCare
        caregiverMeal
        infectiousDisease
        title
        startDate
        endDate
        protectorName
        protectorPhone
        patientName
        patientAge
        patientWeight
        address
        addressDetail
        nursingGrade
        disease
        isolation
        createdAt
      }
    }
  }
`;

// 공지사항 관리
export const NOTICE_LIST_QUERY = gql`
  query listNotice {
    listNotice {
      notices {
        code
        title
        content
        createdAt
      }
    }
  }
`;

export const NOTICE_DETAIL_QUERY = gql`
  query viewNotice($code: Int!) {
    viewNotice(code: $code) {
      code
      title
      content
      createdAt
    }
  }
`;
