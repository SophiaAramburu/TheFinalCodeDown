const express = require("express");
const router = express.Router();
const UserPostModel = require("../models/UserPost");
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

module.exports = router;
