
import pkg from 'mongoose';
const { Schema, model } = pkg;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

const User = model("users", UserSchema);

export default User;