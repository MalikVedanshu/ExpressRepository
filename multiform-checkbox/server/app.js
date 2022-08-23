import express from "express";
const app = express();
import './dbConnect.js';
const port = 5000;

app.get("/", (req,res) => {
    res.send("hello world, I'm getting a hang on this")
})

app.get("/ved", (req,res) => {
    res.send("/ved also has some important stuff")
})
app.listen(port, () => {
    console.log(`App started at ${port}`);
})

