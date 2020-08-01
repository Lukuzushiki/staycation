const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views"); //Specify views directory
app.set("view engine", "ejs"); //Register template engine

app.get("/", (req, res) => {
  const monster = [{ name: "Hydra" }, { name: "Medusa" }, { name: "Centaur" }];
  res.render("index", {
    name: "Febri",
    monster: monster,
  });
});
app.get("/:name", (req, res) => res.send(`Nama Saya::${req.params.name}`));

app.listen(port, () =>
  console.log(`Example a listening at http://localhost:${port}`)
);
