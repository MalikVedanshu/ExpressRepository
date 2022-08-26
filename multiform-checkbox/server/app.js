import express from "express";
const app = express();

// import db
import './dbConnect.js';
const port = 5000;

// Import DB Models
import Users from './models/Users.js';

app.use(express.json()); //to read the file from the client

app.get("/", (req,res) => {
    res.send("hello world from ved")
})

app.post("/data", async (req,res) => {
    try {
        const userdata = new Users(req.body);
        await userdata.save()
        res.status(200).json({msg : "User Data is stored in DB successfully"});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    }
})
app.listen(port, () => {
    console.log(`App started at ${port}`);
})

