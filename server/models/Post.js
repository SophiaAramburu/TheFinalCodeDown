const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  postText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     commentAuthor: {
  //       type: String,
  //       required: true,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const Post = model('Post', postSchema);

module.exports = Post;



// const mongoose = require("mongoose");
// mongoose.pluralize(null);

// const collectionName = "user_post"; //process.env.COL_USER_POST;
// const Schema = mongoose.Schema;

// const userPostSchema = new Schema({
//   name: String,
//   posts: [
//     {
//       status: String,
//       createdDate: Date,
//       updatedDate: Date,
//       deletedDate: Date,
//       location: { late: Number, long: Number },
//     },
//   ],
// });

// userPostSchema.pre("save", function (next) {
//   var currentDate = new Date();
//   this.updatedDate = currentDate;
//   if (!this.createdDate) this.createdDate = currentDate;
//   next();
// });

// module.exports = mongoose.model(collectionName, userPostSchema);
