import mongoose from "mongoose";

//user schema data collection 2 validation included
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, //validation
    unique: true,
  },
  email: {
    type: String,
    required: true, //validation
    unique: true,
  },
});


//creating an index
userSchema.index({title:1})
export default mongoose.model("User", userSchema);
