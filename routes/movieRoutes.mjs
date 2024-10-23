//imports

import express from "express";

const router = express.Router();
import Movie from "../model/movieSchema.mjs";

//create a new movie
router.post("/", async (req, res) => {
  try {
    //create variable
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.json(newMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mgs: `Server error` });
  }
});

//read get all movied
router.get("/", async (req, res) => {
  try {
    //create a variable
    const allMovies = await Movie.find({});
    res.json(allMovies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "server error" });
  }
});

// update a movie
router.put("/:id", async (req, res) => {
  try {
    let updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "server error" });
  }
});

//delete a movie
router.delete("/:id", async (req, res) => {
  try {
    let deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    res.json(deletedMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "server error" });
  }
});

export default router;
