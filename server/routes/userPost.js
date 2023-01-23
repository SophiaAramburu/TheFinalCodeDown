const express = require("express");
const router = express.Router();
const UserPostModel = require("../models/UserPost");
const userPostSeeds = require("../seeds/userPostSeeds");
const DATA_TYPE = ["application/json"];
const RESPONSE_CODE = [200];
const setResponseParams = function (res, statusCode, contentType) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", contentType);
  return res;
};

router.get("/", async function (req, res, next) {
  const query = {
    deletedDate: { $eq: null },
  };

  const userPost = await UserPostModel.find(query);
  res = setResponseParams(res, RESPONSE_CODE[0], DATA_TYPE[0]);
  const result = {
    items: userPost,
  };
  res.send(result);
});

router.get("/:userId", async function (req, res, next) {
  const query = {
    _id: req.params.userId,
  };

  const userPost = await UserPostModel.findOne(query);
  res = setResponseParams(res, RESPONSE_CODE[0], DATA_TYPE[0]);
  const result = {
    items: userPost,
  };
  res.send(result);
});

router.get("/:userId/:postId", async function (req, res, next) {
  const { userId, postId } = req.params;
  const query = {
    _id: userId,
  };

  const userPost = await UserPostModel.findOne(query);
  const post = userPost.posts.find((p) => p._id.equals(postId));

  res = setResponseParams(res, RESPONSE_CODE[0], DATA_TYPE[0]);
  const result = {
    items: post,
  };
  res.send(result);
});

router.post("/:userId", async function (req, res, next) {
  const body = {
    location: {
      late: req.body.late,
      long: req.body.long,
    },
    status: req.body.status,
    createdDate: Date.now(),
    updatedDate: Date.now(),
  };

  const userPost = await UserPostModel.updateOne(
    { _id: req.params.userId },
    { $push: { posts: body } }
  );

  res = setResponseParams(res, RESPONSE_CODE[0], DATA_TYPE[0]);
  const result = {
    items: userPost,
  };
  res.send(result);
});

router.put("/:userId/:postId", async function (req, res, next) {
  const { userId, postId } = req.params;
  const { status, location } = req.body;

  const userPost = await UserPostModel.findOne({
    _id: userId,
  });
  const updatedIndex = userPost.posts.findIndex((p) => p._id.equals(postId));
  const updatedPost = userPost.posts[updatedIndex];
  console.log(updatedPost);
  if (updatedPost) {
    updatedPost.status = status;
    updatedPost.location = location;
    updatedPost.updatedDate = Date.now();
  }

  await UserPostModel.findOneAndUpdate({ _id: userId }, userPost);

  res = setResponseParams(res, RESPONSE_CODE[0], DATA_TYPE[0]);
  const result = {
    items: userPost,
  };
  res.send(result);
});

router.delete("/:userId/:postId", async function (req, res, next) {
  const { userId, postId } = req.params;

  const userPost = await UserPostModel.updateOne(
    { _id: userId },
    {
      $pull: {
        posts: { _id: postId },
      },
    }
  );

  res = setResponseParams(res, RESPONSE_CODE[0], DATA_TYPE[0]);
  const result = {
    items: userPost,
  };
  res.send(result);
});

router.post("/reset", async function (req, res, next) {
  await UserPostModel.deleteMany({});
  const userPost = await UserPostModel.create(userPostSeeds);

  res = setResponseParams(res, RESPONSE_CODE[0], DATA_TYPE[0]);
  const result = {
    items: userPost,
  };
  res.send(result);
});

module.exports = router;
