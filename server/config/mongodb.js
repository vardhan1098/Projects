import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Database Connected");
        });

        mongoose.connection.on("error", (err) => {
            console.error("Database Connection Error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.log("Database Disconnected");
        });

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch (err) {
        console.error("Failed to connect to the database:", err);
        process.exit(1); 
    }
};

export default connectDB;
