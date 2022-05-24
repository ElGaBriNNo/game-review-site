import express from "express";
import userModel from "../model/models.js";
import Game from "../model/game.js";
const app = express();

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/", async (request, response) => {
    const games = await Game.find({});

    try {
        response.send(games);
    } catch (error) {
        response.status(500).send(error);
    }
});

export default app;
