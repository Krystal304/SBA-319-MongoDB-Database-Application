import mongoose from "mongoose";


// data collection 3 post

const reviewSchema = new mongoose.Schema({
    movie:{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie,', required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    review: { type: String, required: true},
    rating: { type: Number, min: 1, max: 5, required: true }
  });

  export default mongoose.model("Review", reviewSchema);

  //creating an index
reviewSchema.index({title:1})