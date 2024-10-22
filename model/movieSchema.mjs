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

//creating an index
movieSchema.index({name:1})





export default mongoose.model("Movie", movieSchema);
