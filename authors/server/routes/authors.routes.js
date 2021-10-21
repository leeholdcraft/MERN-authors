const AuthorsController = require("../controllers/authors.controllers");

module.exports = app => {
  app.get("/api/authors/",AuthorsController.findAllAuthors);
  app.get("/api/authors/:id",AuthorsController.findOneSingleAuthors);
  app.put("/api/authors/update/:id",AuthorsController.updateExistingAuthors);
  app.post("/api/authors/new",AuthorsController.createNewAuthors);
  app.delete("/api/authors/delete/:id",AuthorsController.deleteAnExistingAuthors);
};