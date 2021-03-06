const express = require("express");
//const bodyParser = require("body-parser");
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("could not connect to the database. Exiting now", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.",
  });
});

require("./app/routes/note.routes.js")(app);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
