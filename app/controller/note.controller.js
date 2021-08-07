const note = require("../models/note.model.js");

exports.create = (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({ message: "Note content cannot be empty" });
  }
};

const note = new note({
  title: req.body.title || "Untitled Note",
  content: req.body.content,
});

note
  .save()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Note.",
    });
  });

exports.findAll = (req, res) => {};
exports.findOne = (req, res) => {};
exports.update = (req, res) => {};
exports.delete = (req, res) => {};
