const express = require("express");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use(
  cors({
    origin: "https://devmedia-frontend.onrender.com/",
  })
);

if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "config/config.env" });
}

// import routes
const post = require("./routes/postRoute");
const user = require("./routes/userRoute");
const chat = require("./routes/chatRoute");
const message = require("./routes/messageRoute");

app.use("/api/v1", post);
app.use("/api/v1", user);
app.use("/api/v1", chat);
app.use("/api/v1", message);

// deployment
app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

// error middleware
app.use(errorMiddleware);

module.exports = app;
