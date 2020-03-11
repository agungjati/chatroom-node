import Mongoose from 'mongoose'

const userSchema = new Mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    telephone: String,
  });

  export default Mongoose.model('user', userSchema);