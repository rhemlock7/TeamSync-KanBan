const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    projects: [Project]!
  }

  type Project {
    _id: ID
    title: String
    createdAt: String
    users: [User]!
    lists: [List]!
  }
  
  type List {
    _id: ID
    title: String
    projectId: ID
    cards: [Card]!
  }

  type Card {
    _id: ID
    title: String 
    listId: ID
    description: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    projects: [Project]
    project(username: String!): Project
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(title: String!, projectAuthor: String!, authId: ID!): Project
    addList(title: String!, projectId: ID!): List
    addCard(title: String!, listId: ID!, description: String!): Card
  }
`;

module.exports = typeDefs;
