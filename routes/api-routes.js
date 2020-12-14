const db = require("../models");
module.exports = (app) => {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    });

    // getting the created workout 
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.create({})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    });
}