const model = require('../models/user.model');
const jwt = require("jsonwebtoken");


class UserController {
  constructor() {}

  login = async (req, res) => {
    let { username, password } = req.body;
    if (!username || !password) {
      res.send({ status: false, token: "", message: "Username and Password are required" });
    } else {
      let user = await model.findByUsername(username);
      if (user && user != null) {
        if (password == user.password) {
          let token = jwt.sign(
            { username: username, email: user.email },
            "ahihi18071995"
          );
          res.send({ status: true, token: token, user: user, message: "Found" });
        } else {
          res.send({ status: false, token: "", message: "Password is wrong" });
        }
      } else {
        res.send({ status: false, token: "", message: "User does not exist" });
      }
    }
  }

}

module.exports = new UserController();
