const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected");
})
.catch((err) => {
    console.log("Error")
});

app.get("/hello" , (req,res) => {
    res.send("hello");
});

app.listen(process.env.PORT,() => {
    console.log("server started at  "+ process.env.PORT);
});