import noPoster from "../assets/img/no-poster.jpg";

export const getMoviePosterOrDefaultPoster = (movie) => {
    if (movie.Poster === "N/A")
        return noPoster;
    return movie.Poster;
}