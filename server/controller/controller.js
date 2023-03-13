const bcrypt = require("bcrypt");

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

    res.json({ username, email, hash, checkPassword });
  } catch (error) {
    res
      .status(500)
      .json9({ err: error.message || "Opps! Error while Sign Up." });
  }
};

// login controller
exports.login = (req, res) => {
  try {
    if (!req.body) {
      res.status(406).json({ err: "You have to fill the email and password." });
      return;
    }

    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(406)
        .json({ err: "You have must fill all input data." });
    }

    const user = "$2b$10$Vng/EMOCLleLhjC1kuOP3eC1/f9culbvZdRWSaGNTSfIF0S7lUK9G";
    const isMatch = bcrypt.compare(password, user);

    res.json({ email, isMatch });
  } catch (error) {
    res.status(500).json({ err: error.message || "Login failed!" });
  }
};
