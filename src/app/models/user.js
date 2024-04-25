import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // confirmpassword: {
  //  type: String,
  //   required: true,
  // },
})

export default models.User || model('User', UserSchema)
