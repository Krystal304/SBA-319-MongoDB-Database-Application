//import

import mongoose from "mongoose";

// movie Schema data collection 1
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
  },
});


//user schema data collection 2
const userSchema = new mongoose.Schema({
  username:{ 
    type: String, 
    required: true,
    unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  }
});

// data collection 3 post

const reviewSchema = new mongoose.Schema({
  movie:{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie,', required: true},
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  review: { type: String, required: true},
  rating: { type: Number, min: 1, max: 5, required: true }
});


const Movie = mongoose.model('Movie', movieSchema);
const User = mongoose.model('User', movieSchema);
const Review = mongoose.model('Review', movieSchema);

model.exports = { Movie, User, Review};
// export default mongoose.model("Movie", movieSchema);
