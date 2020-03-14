import Mongoose from 'mongoose'
Mongoose.connect('mongodb://localhost:27017/chat_room', {
  useCreateIndex: true,
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connection successfully")
});