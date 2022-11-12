// eslint-disable-next-line import/no-extraneous-dependencies
import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: String,
});

export default model('User', UserSchema);
