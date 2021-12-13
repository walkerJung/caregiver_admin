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
  query listUser($type: String!, $skip: Int!, $take: Int!) {
    listUser(type: $type, skip: $skip, take: $take) {
      users {
        code
        userId
        userType
        userName
        sex
        phone
      }
      count
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
  query listAnnouncement($status: Int, $skip: Int!, $take: Int!) {
    listAnnouncement(status: $status, skip: $skip, take: $take) {
      announcements {
        code
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
      count
    }
  }
`;

export const ANNOUNCEMENT_DETAIL_QUERY = gql`
  query viewAnnouncement($code: Int!) {
    viewAnnouncement(code: $code) {
      code
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
      expectedCost
      hopeCost
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
      user {
        userId
        userName
        sex
        phone
      }
      announcementApplication {
        userCode
        caregiverCost
        confirm
        user {
          userId
          userName
          sex
          phone
        }
      }
    }
  }
`;

export const EXPECTEDCOST_WRITE_QUERY = gql`
  mutation writeExpectedCost($code: Int!, $expectedCost: Int!) {
    writeExpectedCost(code: $code, expectedCost: $expectedCost) {
      ok
      error
    }
  }
`;

export const COMPLETE_ANNOUNCEMENT_MUTATION = gql`
  mutation completeAnnouncement($code: Int!) {
    completeAnnouncement(code: $code) {
      ok
      error
    }
  }
`;

export const DELETE_ANNOUNCEMENT_MUTATION = gql`
  mutation deleteAnnouncement($announcementCode: Int!) {
    deleteAnnouncement(announcementCode: $announcementCode) {
      ok
      error
    }
  }
`;

// 공지사항 관리
export const NOTICE_LIST_QUERY = gql`
  query listNotice($skip: Int!, $take: Int!) {
    listNotice(skip: $skip, take: $take) {
      notices {
        code
        title
        content
        createdAt
      }
      count
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

export const NOTICE_DELETE_MUTATION = gql`
  mutation deleteNotice($code: Int!) {
    deleteNotice(code: $code) {
      ok
    }
  }
`;

export const NOTICE_WRITE_MUTATION = gql`
  mutation writeNotice($title: String!, $content: String!) {
    writeNotice(title: $title, content: $content) {
      ok
    }
  }
`;

export const NOTICE_EDIT_MUTATION = gql`
  mutation editNotice($code: Int!, $title: String!, $content: String!) {
    editNotice(code: $code, title: $title, content: $content) {
      ok
    }
  }
`;
