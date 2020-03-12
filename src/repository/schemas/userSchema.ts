import Mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'

const userSchema = new Mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    telephone: String,
  });

  userSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({ 
      userId: this._id, 
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email, 
      telephone: this.telephone 
    }, "202003" );

    return token;
  }

  export default Mongoose.model('user', userSchema);