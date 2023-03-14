const bcrypt = require("bcrypt");
const User = require("../model/schema");

// signup controller
exports.signup = async (req, res) => {
  try {
    if (!req.body) {
      res.status(406).json({ err: "You have to fill sign up form." });
      return;
    }

    const { username, email, password, checkPassword } = req.body;
    if (!username || !email || !password || !checkPassword) {
      return res
        .status(406)
        .json({ err: "You have must fill all input data." });
    }
    if (password !== checkPassword) {
      return res.status(406).json({ err: "password not match!" });
    }
    if (checkPassword.length < 8) {
      return res
        .status(406)
        .json({ err: "Passwrod is must be need 8 character." });
    }

    const hash = await bcrypt.hashSync(password, 10);

    // user instance
    const newUser = new User({
      email,
      password: hash,
      username,
    });

    newUser
      .save(newUser)
      .then((register) => {
        res.json(register);
      })
      .catch((error) => {
        res
          .status(406)
          .json({ err: error.message || "Something was wrong while sign up" });
      });
  } catch (error) {
    res
      .status(500)
      .json({ err: error.message || "Opps! Error while Sign Up." });
  }
};

// login controller
exports.login = async (req, res) => {
  try {
    if (!req.body) {
      res.status(406).json({ err: "You have to fill the email and password." });
      return;
    }

    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res
        .status(406)
        .json({ err: "You have must fill all input data." });
    }

    const user = await User.findOne({ email });

    if (!user)
      return res.status(406).json({ err: "No account with this email." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(406).json({ err: "Invalid password!" });

    res.json({ username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ err: error.message || "Login failed!" });
  }
};
