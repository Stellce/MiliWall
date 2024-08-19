const express = require("express");
const multer = require("multer");

const PostController = require("../controllers/posts");
const checkAuth = require("../middleware/check-auth");
// const extractFile = require("../middleware/file");

const fileUpload = multer();

const router = express.Router();

router.post("", checkAuth, fileUpload.single('image'), PostController.createPost);

router.put("/:id", checkAuth, fileUpload.single('image'), PostController.updatePost);

router.get("", PostController.getPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
