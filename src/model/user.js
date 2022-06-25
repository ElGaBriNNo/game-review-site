
import pkg from 'mongoose';
const { Schema, model } = pkg;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
}, {
  collection: 'users'
})
const User = model("users", UserSchema);

export default User;
