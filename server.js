const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//mongodb atlas connect
// const user = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;
const user = "sharmi45";
const password = "sharmi123";
mongoose
  .connect(
    `mongodb+srv://${user}:${password}@sharonjr-oq9ph.mongodb.net/sjrDB?retryWrites=true`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});
//routes connect
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/client", require("./routes/api/client"));
app.use("/api/admin", require("./routes/api/admin"));
app.use("/api/view", require("./routes/api/view"));

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("Server started at port 5000");
});
