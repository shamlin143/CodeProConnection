const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.ProjectPost
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.ProjectPost
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel.data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(db);
    db.ProjectPost
      .create({
        businessType: req.body.businessType,
        projectName: req.body.projectName,
        userName: req.body.userName,
        projectFeatures: req.body.projectFeatures,
        projectDescription: req.body.projectDescription,
        projectNotes: req.body.projectNotes,
        fee: req.body.fee
     })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.ProjectPost
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.ProjectPost
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
