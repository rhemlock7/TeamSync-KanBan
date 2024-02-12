import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query QUERY_PROJECTS {
  projects {
    _id
    title
    lists {
      _id
      projectId
      title
      cards {
        _id
        listId
        title
        description
      }
    }
  }
}
`;



export const QUERY_ONE_PROJECT = gql`
query getProjectByID($projectId: ID!) {
  projectId(projectId: $projectId) {
    _id
    title
    createdAt
    users {
      _id
      username
      email
    }
    lists {
      _id
      title
      projectId
      cards {
        _id
        title
        listId
        description
        createdAt
        comments {
          _id
          commentText
          commentAuthor
          createdAt
        }
      }
    }
  }
}
`;
