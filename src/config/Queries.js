import { gql } from "@apollo/client";

export const USER_LIST_QUERY = gql`
  query listUser {
    listUser {
      users {
        userId
        userType
        userName
        sex
        phone
      }
    }
  }
`;

export const USER_VIEW_QUERY = gql`
  query viewProfile($userId: String!) {
    viewProfile(userId: $userId) {
      user {
        userId
        userType
        userName
        sex
        phone
      }
    }
  }
`;
