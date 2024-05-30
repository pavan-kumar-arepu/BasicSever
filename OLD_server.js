import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  res.send("Hello Pavan! How are you");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("We created your username " + req.body.username);
});

app.delete("/user", (req, res) => {
  console.log(req.body);
  res.send("We deleted your username " + req.body.username);
});

app.put("/user", (req, res) => {
  console.log(req.body);
  res.send("We have updated your username " + req.body.username);
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
