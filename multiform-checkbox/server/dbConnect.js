import mongoose from "mongoose";

async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://docexp:ze54xsuw7AlBJvdm@cluster0.oqm2c.mongodb.net/customers')
        console.log('Mongo DB is connected');
    }
    catch (error) {
        console.log(error);
    }
}

dbConnect();
