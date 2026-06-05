//require("dotenv").config(path: "./.env"); // COMMON JS SYNTAX but require and import cannot be used together
/// <reference path="./types/express.d.ts" />
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

// Use dynamic imports so we can catch import-time errors under ts-node/esm
(async () => {
    try {
        const { app } = await import("./app.js");
        const connectDB = (await import("./db/db.js")).default;

        await connectDB();

        // listen for requests only after successful connection to the database
        app.listen(process.env.PORT || 8000, () => {
            console.log("Server is running on port:", process.env.PORT || 8000);
        });
    } catch (err) {
        console.error("Startup error:", err);
        process.exit(1);
    }
})();






/* FIRST APPROACH

import express from "express";

const app = express();

//IIFE
(async () => {
    try {

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        app.on("error", (err) => {
            console.log("Error connecting to MongoDB", err);
            throw err;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`);
        }
        );

    } catch (error) {
        console.log("Error:", error);
        throw error;

    }
})()*/