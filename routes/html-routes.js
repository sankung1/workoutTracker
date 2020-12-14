// requiring path
const path = require("path");

module.exports = (app) =>{

    //get route to send the user to the home page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // get route to send the user to the exercise page
    app.get("/exercise", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // get route to send the user to stats page
    app.get("/stats", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}