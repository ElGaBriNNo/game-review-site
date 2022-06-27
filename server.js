import express, {
  json
} from "express";
import cors from 'cors';
import pkg from 'mongoose';
const {
  connect,
  connection
} = pkg;

const port = 8000;

import Router from "./src/router/router.ts";

const app = express();

app.use(json());
app.use(cors())

const username = "admin";
const password = "admin";
const cluster = "cluster0.pnanr";
const dbname = "game-review-siteDB";

connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(port, () => {
  console.log("Server is running at port " + port);
});