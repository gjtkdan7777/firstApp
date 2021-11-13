const express = require("express");
const { Article } = require("./api");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", Article.articleRead);
app.post("/", Article.articleCreate);
app.patch("/", Article.articleUpdate);
app.delete("/:id", Article.articleDelete);
// delete의 경우 바디값보다 파람으로 하는경우가 많음

app.listen(PORT, "localhost", () => {
  console.log(`App listening at http:lcoalhost://${PORT}`);
});
