const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
//JWT token, authentication for user login
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('posts');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('posts');
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        //Post in models folder
        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user }
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

        addPost: async (parent, { postText, postAuthor }) => {
            const post = await Post.create({ postText, postAuthor });

            await User.findOneAndUpdate(
                { username: postAuthor },
                { $addToSet: { posts: post._id } }
            );

            return post;
        },
        // addpostProtected: async (parent, { postText}, context) => {
        //     if (context.user) {
        //         try {
        //             const post = await post.create({ postText, 
        //                 postAuthor: context.username });
        //             await User.findOneAndUpdate(
        //                 { username: context.username },
        //                 { $addToSet: { posts: post._id } }
        //             );
        //         } catch (error) {
        //             console.log(error)
        //             res.status(500).json(error)
        //         }
        //     }
        //     throw new AuthenticationError('Incorrect credentials');

        // },
        removePost: async (parent, { postId }) => {
            return post.findOneAndDelete({ _id: postId });
        }
    }

};

module.exports = resolvers;