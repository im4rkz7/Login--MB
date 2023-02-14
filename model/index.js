import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const messagesSchema = new Schema({
  author: {
    email: { type: String, require: true },
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    age: { type: Number, require: true },
    nickname: { type: String, require: true },
    avatar: { type: String, require: true },
  },
  text: { type: String, require: true },
  date: { type: Date, require: true },
});

const Message = model("Message", messagesSchema);

export default Message;
