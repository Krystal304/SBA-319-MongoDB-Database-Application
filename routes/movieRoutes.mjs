//imports

import express from "express";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  try {
    //create variable
    const newMovie = new movie(req.body);
    await newMovie.save();
    res.json(newMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mgs: `Server error` });
  }
});

//read
router.get("/", async (req, res) => {
  try {
    //create a variable
    const allMovies = await movie.find({});
    res.json(allMovies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "server error" });
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    let updatedMovie = await movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "server error" });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    let deletedMovie = await movie.findByIdAndDelete(req.params.id);
    res, json(deletedMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "server error" });
  }
});

export default router;
