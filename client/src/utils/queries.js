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

export const GET_SINGLE_CARD = gql`
query GetCard($cardId: ID!) {
  card(cardId: $cardId) {
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
    toDoes {
      _id
      text
      isCompleted
    }
  }
}
`;

