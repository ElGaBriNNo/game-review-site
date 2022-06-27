import axios from "axios";

export const Trailer = async gameTrailer => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCUtsBtHTxfKmxoxwJtHRx-k0HMlb4ctM8&q=${gameTrailer}&type=video&maxResults=1`);
    const result = response.json();
    return result;
};





