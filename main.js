"use strict";
const express = require("express")
require("dotenv").config();
const connectDB = require("./config/db");
connectDB();
const AWS = require("aws-sdk");
const app=express();
const SES = new AWS.SES(awsConfig)
const user_route=require("./routers/user_route")
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));
app.use("/user", user_route);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});




