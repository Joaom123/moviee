import {noPoster} from "../assets";

export const getMoviePosterOrDefaultPoster = (movie) => {
    const {Poster} = movie;
    return Poster === "N/A" ? noPoster : Poster;
}