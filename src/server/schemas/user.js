import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, 'Username already exists'],
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  }
})

const User = mongoose.model('User', UserSchema)

export default User