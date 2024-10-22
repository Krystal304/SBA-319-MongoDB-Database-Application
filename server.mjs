//imports

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/conn.mjs";
import movieRoutes from "./routes/movieRoutes.mjs";
import { movie } from "./data/data.mjs";
import Movie from './model/movieSchema.mjs'

//setup
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

//db connection
connectDB();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//routes
app.use("/movie", movieRoutes);

//seed route
app.get('/seed', async (req, res) => {

  //delete options
  await Movie.deleteMany({})
  //create movie in db
  await Movie.create(movie)
  res.send('Seeding database')

});

//listener

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
