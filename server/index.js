import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Middleware function
const logger = (req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
  next(); // Call next middleware function
};

// Mount middleware at root path
app.use(logger);

app.use(cors());

import houseRoute from "./routes/houseRoute";
app.use("/house", houseRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello from Server" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}... `);
});

const connectDB = require("./connect-db");

