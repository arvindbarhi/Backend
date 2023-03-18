const User = require("../model/user.Modal");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  console.log("hi", req.body);
  try {
    const { name, email, mobile, address, password } = req.body.payload;
    const addUser = new User({
      name,
      email,
      mobile,
      address,
      password,
    });
    const createUser = await addUser.save();
    return res.status(200).json({
      success: true,
      message: "user is registered",
      data: createUser,
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    const login = await User.findOne({ email: email });
    if (!login) {
      throw { message: "User not found" };
    }
    if (!login || login.password != password) {
      throw { message: "username or password doesn't match" };
    }

    const token = jwt.sign({ _id: login._id, email: login.email }, "manish");
    return res.status(200).json({
      success: true,
      message: "Login successfully",
      data: {
        Token: token,
        email: login.email,
        name: login.name,
        address: login.address,
        mobile: login.mobile,
      },
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

module.exports = {
  registerUser,
  login,
};
