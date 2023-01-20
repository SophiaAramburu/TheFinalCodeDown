const mongoose = require("mongoose");
mongoose.pluralize(null);

const collectionName = "user_post"; //process.env.COL_USER_POST;
const Schema = mongoose.Schema;

const userPostSchema = new Schema({
  name: String,
  posts: [
    {
      status: String,
      createdDate: Date,
      updatedDate: Date,
      deletedDate: Date,
      location: { late: Number, long: Number },
    },
  ],
});

userPostSchema.pre("save", function (next) {
  var currentDate = new Date();
  this.updatedDate = currentDate;
  if (!this.createdDate) this.createdDate = currentDate;
  next();
});

module.exports = mongoose.model(collectionName, userPostSchema);
