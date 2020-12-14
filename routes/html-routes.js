// requiring path
const path = require("path");

module.exports = (app) =>{
    // get route to send the user to the exercise page
    app.get("/exercise", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
}