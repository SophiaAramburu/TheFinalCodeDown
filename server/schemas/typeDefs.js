const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userPosts: [userPost]!
  }

  type userPost {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    userPosts(username: String): [userPost]
    userPost(userPostId: ID!): userPost
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!, postAuthor: String!): userPost
    removeUserPost(userPostId: ID!): userPost
  }
`;


module.exports = typeDefs;


