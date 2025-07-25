"use server";

import initDatabase from "@/utils/initDatabase";
import mongoose from "mongoose";

let isConnected = false; // Track the connection state

export const connectToDatabase = async (): Promise<void> => {
  if (isConnected) {
    console.log("Database is already connected");
    return;
  }
  console.log("isconnect");
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in environment variables.");
  }

  try {
    // Optional: Enable strict query mode depending on Mongoose version
    mongoose.set("strictQuery", true);
    console.log("try connect");
    await mongoose.connect(mongoUri, {
      dbName: "test", // TODO: replace with actual DB name or use env variable
    });

    isConnected = true;
    console.log("Database connection established");

    // Initialize DB (e.g., create indexes or seed data)
    await initDatabase();
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database");
  }
};
