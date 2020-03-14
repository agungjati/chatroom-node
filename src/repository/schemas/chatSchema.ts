import Mongoose, { Schema } from 'mongoose'

const chatSchema = new Mongoose.Schema({
  name: String,
  createdAt: Date,
  members: [{
    username: {
      type: String,
      unique: true
    },
    _id: false
  }],
  chats: [{
    username: String,
    message: String,
    createdAt: Date
  }]
  });

  export default Mongoose.model('chat', chatSchema);