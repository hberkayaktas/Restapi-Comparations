const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({path:"./utilities/.env"})
const userRoute = require("./routes/userRoute");

const app = express();
const cors = require('cors')
//database bağlantısı
require("./utilities/database")

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



app.use("/", userRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
