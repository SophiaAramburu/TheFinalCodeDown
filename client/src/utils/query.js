import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
    }
  }
`;





// const Users = [
//     { id: 1, firstName: 'Reginald', lastName: 'Pitts' },
//     { id: 2, firstName: 'Sophia', lastName: 'Aramburu' },
//     { id: 3, firstName: 'Alexandria', lastName: 'Guerrero' },
//     { id: 4, firstName: 'Dee', lastName: 'Carter' },
//     { id: 5, firstName: 'Jose', lastName: 'Huerta' },
//     { id: 6, firstName: 'Tangnay', lastName: 'Ou' }
// ]