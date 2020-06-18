import noPoster from "../assets/img/no-poster.jpg";

export const getMoviePosterOrDefaultPoster = (movie) => {
    const {Poster} = movie;
    if (Poster === "N/A")
        return noPoster;
    return Poster;
}