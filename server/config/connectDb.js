import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connected")
    } catch (error) {
        console.log(`DataBase Error ${error}`)
        console.log("Server started, but MongoDB is not connected. Update MONGODB_URL in .env with a valid Atlas URI or a local MongoDB URL.")
    }
}

export default connectDb