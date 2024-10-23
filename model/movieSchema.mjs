//import

import mongoose from "mongoose";

// movie Schema data collection 1
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, //validation
  },
  genre: {
    type: String,
    require: true, //validation
  },
  year: {
    type: Number,
  },
});

//creating an index
movieSchema.index({title:1})





export default mongoose.model("Movie", movieSchema);
