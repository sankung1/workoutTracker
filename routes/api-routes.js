const db = require("../models");
module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  });

  app.post("/api/workouts/range", function (req, res) {
    db.Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  });
};

app.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, {
    $push: { exercises: req.body },
  })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});
