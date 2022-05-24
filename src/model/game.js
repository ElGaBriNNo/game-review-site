
import pkg from 'mongoose';
const { Schema, model } = pkg;

const GameSchema = new Schema({
    title: {
        type: String,
        required: true,
    }
});

const Game = model("games", GameSchema);

export default Game;
