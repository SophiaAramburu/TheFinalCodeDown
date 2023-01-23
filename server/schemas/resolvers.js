const { AuthenticationError } = require('apollo-server-express');
const { User, UserPost } = require('../models');
//JWT token, authentication for user login
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('userPosts');
          },
          user: async (parent, { username }) => {
            return User.findOne({ username }).populate('userPosts');
          },
          userPosts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return userPost.find(params).sort({ createdAt: -1 });
          },
          userPost: async (parent, { userPostId }) => {
            return userPost.findOne({ _id: userPostId });
          },
        },

    Mutation: {
        addUser: async (parent, { username, email, password}) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user}
        }, 

        //When the user logins into the app
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            //If there is no account with the email, thihs will throw an wrror
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            //If the password is incorrect, this will throw an error
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            //If the email and pass are correct, the user will be signed in with a JWT
            const token = signToken(user);

            return { token, user };
        }, 

        addUserPost: async (parent, { postText, postAuthor }) => {
            const userPost = await userPost.create({ postText, postAuthor });

            await User.findOneAndUpdate(
                { username: postAuthor },
                { $addToSet: { userPosts: userPost._id }}
            );

            return userPost;
        },
        removeUserPost: async (parent, { userPostId }) => {
            return userPost.findOneAndDelete({ _id: userPostId });
        }
    }

};

module.exports = resolvers;