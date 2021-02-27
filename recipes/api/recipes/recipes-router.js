const express = require("express");
const db = require("./recipes-model");

const router = express.Router();


//get requests

router.get("/", async (req, res) => {
  try {
    const recipes = await db.find();
    res.json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cannot get recipes!",
    });
  }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
      const recipes = await db.findById(id);
      res.json(recipes);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Cannot get recipe by id!",
      });
    }
  });


// post request 

router.post("/", async (req, res) => {
    const addRecipe = req.body;
    try {
      const newRecipe = await db.add(addRecipe);
      res.json(newRecipe);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "could not add the recipe" });
    }
  });


  // put request 
  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    try {
      const updateRecipe = await db.update(id, changes);
      if (updateRecipe) {
        res.json(updateRecipe);
      } else {
        res.status(404).json({ message: 'invalid recipe id' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'error with db', error: err });
    }
  });

  // delete request 

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const count = await db.remove(id);
      if (db) {
        res.json({ message: `deleted ${count} records` });
      } else {
        res.status(404).json({ message: 'invalid recipe id' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'error with db', error: err });
    }
  });


module.exports = router;
