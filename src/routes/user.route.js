const userRoute = require("express").Router();

const userController = require("../controller/user.controller");

userRoute.post("/register", userController.registerUser);
userRoute.post("/login", userController.login);

module.exports = userRoute;
