/* eslint-disable import/no-extraneous-dependencies */
import { Schema, model } from 'mongoose';

const HouseSchema = new Schema(
  {
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    // pegar dado do usuario que criou
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// criar URL da thumb
HouseSchema.virtual('thumbnail_url').get(function () {
  return `https://localhost:3000/files/${this.thumbnail}`;
});

export default model('House', HouseSchema);
