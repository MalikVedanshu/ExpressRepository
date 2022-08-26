import mongoose from "mongoose";

async function dbConnect() {
    try {
        await mongoose.connect('')
        console.log('Mongo DB is connected');
    }
    catch (error) {
        console.log(error);
    }
}

dbConnect();
