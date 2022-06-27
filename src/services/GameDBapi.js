import axios from "axios";

export const Games = type => {
  return axios.create({
    baseURL: `https://api.rawg.io/api/platforms?key=5954714cc3024d74b809bd9af70c74c1`
  });
};

export const GamesF = async type => {
  const response = await fetch(`https://api.rawg.io/api/${type}?key=5954714cc3024d74b809bd9af70c74c1`);
  const result = response.json();
  return result;
};
export const fetchGenres = async genre => {
  const response = await fetch(`https://api.rawg.io/api/${genre}?key=5954714cc3024d74b809bd9af70c74c1`);
  const result = response.json();
  return result;
};
export const fetchGame = async type => {
  const response = await fetch(`https://api.rawg.io/api/games/${type}?key=5954714cc3024d74b809bd9af70c74c1`);
  const result = response.json();
  console.log(result);
  return result;
};
export const fetchByName = async searchQuery => {
  const response = await fetch(`https://api.rawg.io/api/games/${searchQuery}/game-series?key=5954714cc3024d74b809bd9af70c74c1`);
  const result = response.json();
  console.log(result);
  return result;
};

