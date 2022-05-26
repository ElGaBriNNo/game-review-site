import axios from "axios";

export const Games = type => {
  return axios.create({
    baseURL: `https://api.rawg.io/api/platforms?key=e38442533bb34ee4b6e5313aca525908${type}`
  });
};

