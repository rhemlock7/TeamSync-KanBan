import { gql } from '@apollo/client';


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

export const QUERY_SINGLE_PROJECT = gql`
  query QUERY_SINGLE_PROJECT($username: String!) {
  project(username: $username) {
    _id
    title
    lists {
      _id
      projectId
      title
      cards {
        _id
        description
        listId
        title
        createdAt
      }
    }
  }
}
`;



