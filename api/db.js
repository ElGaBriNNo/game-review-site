const username = "admin";
const password = "admin";
const cluster = "cluster0.pnanr";
const dbname = "game-review-siteDB";


export const database = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`