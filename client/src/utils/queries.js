import { gql } from '@apollo/client';

// export const QUERY_USER = gql`
  
// `;

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
`


// export const QUERY_LISTS = gql`
  
// `;

// export const QUERY_CARDS = gql`
  
// `;
