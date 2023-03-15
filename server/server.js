const express = require("express");
const dotenv = require("dotenv");
const router = require("./router/router");
const connect = require("./database/connect");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const PORT = process.env.SERVER_PORT || 4000;

// Database connection
connect();

// Routes
app.use("/api", router);

app.listen(PORT, () => console.log(`Server running PORT:${PORT}`));
