const express = require("express");
const BlogsRouter = express.Router();

// importing Controllers
const blogsController = require("../controllers/blogs.controller");


// importing compare middleware
const checkUser = require("../middlewares/compareTokenMiddleware")

// BlogsRouter middleware
BlogsRouter.use(checkUser, (req, res, next) => {
    console.log("Blogs router midddleware run");
    next();
});
BlogsRouter.get("/", blogsController.get_all_blogs);

module.exports = BlogsRouter;
