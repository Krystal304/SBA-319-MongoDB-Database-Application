//import

import mongoose from "mongoose";

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

export default mongoose.model("Movie", movieSchema);
