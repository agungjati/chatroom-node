import Mongoose, { Schema } from 'mongoose'

const chatSchema = new Mongoose.Schema({
  name: String,
  type: String,
  members: [{
    userId: Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    telephone: String
  }],
  chats: [{
    id: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    fullName: String,
    message: String,
    CreatedAt: Date
  }]
  });

  export default Mongoose.model('chat', chatSchema);