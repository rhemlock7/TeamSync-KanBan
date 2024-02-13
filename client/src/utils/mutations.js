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

export const ADD_PROJECT = gql`
mutation AddProject($title: String!, $projectAuthor: String!, $authId: ID!) {
  addProject(title: $title, projectAuthor: $projectAuthor, authId: $authId) {
    _id
    title
  }
}
`;

export const ADD_LIST = gql`
mutation AddList($title: String!, $projectId: ID!) {
  addList(title: $title, projectId: $projectId) {
    _id
    title
    projectId
  }
}
`;

export const ADD_CARD = gql`
mutation AddCard($title: String!, $listId: ID!, $description: String!) {
  addCard(title: $title, listId: $listId, description: $description) {
    _id
    title
    listId
    description
    createdAt
  }
}
`;

export const ADD_TODO = gql`
mutation AddToDo($cardId: ID!, $text: String!) {
  addToDo(cardId: $cardId, text: $text) {
    toDoes {
      _id
      text
      isCompleted
    }
    _id
  }
}
`;

export const ADD_COMMENT = gql`
mutation AddComment($cardId: ID!, $commentText: String!, $commentAuthor: String!) {
  addComment(cardId: $cardId, commentText: $commentText, commentAuthor: $commentAuthor) {
    _id
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;

export const UPDATE_TODO = gql`
mutation UpdateToDo($toDoId: ID!, $cardId: ID!, $text: String!, $isCompleted: Boolean!) {
  updateToDo(toDoId: $toDoId, cardId: $cardId, text: $text, isCompleted: $isCompleted) {
    toDoes {
      _id
      text
      isCompleted
    }
    _id
    title
  }
}
`;

export const UPDATE_CARD = gql`
mutation UpdateCard($cardId: ID!, $description: String!, $title: String!, $expirationDate: String!) {
  updateCard(cardId: $cardId, description: $description, title: $title, expirationDate: $expirationDate) {
    title
    listId
    description
    _id
    createdAt
  }
}
`;

export const UPDATE_LIST = gql`
mutation UpdateList($listId: ID!, $title: String!) {
  updateList(listId: $listId, title: $title) {
    title
    projectId
    _id
  }
}
`;

export const UPDATE_PROJECT = gql`
mutation UpdateProject($projectId: ID!, $title: String!) {
  updateProject(projectId: $projectId, title: $title) {
    title
    _id
    createdAt
  }
}
`;

export const REMOVE_PROJECT = gql`
mutation RemoveProject($userId: ID!, $projectId: ID!) {
  removeProject(userId: $userId, projectId: $projectId) {
    title
    createdAt
    _id
  }
}
`;

export const REMOVE_COMMENT = gql`
mutation RemoveComment($cardId: ID!, $commentId: ID!) {
  removeComment(cardId: $cardId, commentId: $commentId) {
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
    _id
    title
  }
}
`;

export const REMOVE_TODO = gql`
mutation RemoveToDo($cardId: ID!, $toDoId: ID!) {
  removeToDo(cardId: $cardId, toDoId: $toDoId) {
    toDoes {
      _id
      text
      isCompleted
    }
    _id
    title
  }
}
`;

export const REMOVE_LIST = gql`
mutation RemoveList($listId: ID!, $projectId: ID!) {
  removeList(listId: $listId, projectId: $projectId) {
    _id
    title
    projectId
  }
}
`;

export const REMOVE_CARD = gql`
mutation RemoveCard($cardId: ID!, $listId: ID!) {
  removeCard(cardId: $cardId, listId: $listId) {
    _id
    title
    description
    listId
  }
}
`;

export const ADD_USER_PROJECT = gql`
mutation AddUserProject($projectId: ID!, $userId: ID!) {
  addUserProject(projectId: $projectId, userId: $userId) {
    title
    users {
      _id
      username
    }
    _id
  }
}
`;

export const UPDATE_USER = gql`
mutation UpdateUser($userId: ID!, $username: String, $email: String, $gitHub: String, $password: String, $img: String, $linkedIn: String) {
  updateUser(userId: $userId, username: $username, email: $email, gitHub: $gitHub, password: $password, img: $img, linkedIn: $linkedIn) {
    _id
    username
    gitHub
    email
    img
    linkedIn
  }
}
`;