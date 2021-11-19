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

// 유저
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

// 공지사항
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
  query viewProfile($code: Int!) {
    viewNotice(code: $code) {
      code
      title
      content
      createdAt
    }
  }
`;
