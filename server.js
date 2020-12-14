const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connection.on("connected", ()=>{
    console.log("Mongoose is connected!");
});
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);



app.listen(PORT, ()=>{
    console.log("You are listening on " + PORT);
})