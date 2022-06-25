import axios from "axios";

export const Trailer = async gameTrailer => {
    await fetch({
        baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.VUE_APP_YOUTUBE_KEY}q=${gameTrailer}&type=video&maxResults=1`
    });
};
