import mongoose from "mongoose";

//user schema data collection 2
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});


//creating an index
userSchema.index({name:1})
export default mongoose.model("User", userSchema);
