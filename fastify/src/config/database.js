const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Connection to database Succesful");
    })
    .catch((err) => {
        console.log("Database Connection Error === "+ err);
    })