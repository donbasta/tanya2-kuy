require('dotenv').config();
import Mongoose = require("mongoose");

let database: Mongoose.Connection;

export const connect = () => {
  const uri = process.env.MONGO_URL || "mongodb+srv://user1:aaaaaaab@tanya2kuy.xqci4.mongodb.net/test";
  if (database) {
    return;
  }
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("connected to database");
  });
  database.on("error", () => {
    console.log("error connecting to database");
  })
}

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
}

