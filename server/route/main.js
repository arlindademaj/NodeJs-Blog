const express = require("express");
const router = express.Router();

//Routes
router.get("", (req, res) => {
  const locals = {
    title: "NodeJs Blog",
    description: "Simple Blog created with NodeJs, Express & MongoDb.",
  };

  res.render("index.ejs", { locals });
});

router.get("/about", (req, res) => {
  res.render("about.ejs");
});

module.exports = router;
