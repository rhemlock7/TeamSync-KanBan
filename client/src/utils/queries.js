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
      gitHub
      linkedIn
      img
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
        toDoes {
          _id
          text
          isCompleted
        }
      }
    }
    createdBy
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

export const GET_USER = gql`
query GetUser($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    email
    gitHub
    img
    projects {
      _id
      title
      createdAt
      createdBy
      users {
        _id
        username
        email
        img
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
          toDoes {
            _id
            text
            isCompleted
          }
        }
      }
    }
  }
}
`;

export const GET_ALL_USERS = gql`
query GetUsers {
  users {
    _id
    username
  }
}
`