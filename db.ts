import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true
 },
 age: {
  type: Number,
  required: true
 }
});

const BookSchema = new mongoose.Schema({
 title: {
  type: String,
  required: true
 },
 content: {
  type: String,
  required: true
 },
 author: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
 }
});

const db = {
 users: mongoose.model("User", UserSchema),
 books: mongoose.model("Book", BookSchema)
};

export default db;
