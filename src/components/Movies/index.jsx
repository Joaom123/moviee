import React from 'react';
import Movie from "../Movie";

const Movies = ({movies, onCardClick}) =>
    <section className="moviesCards">
        {
            movies.map(movie =>
                <Movie
                    key={movie.imdbID}
                    movie={movie}
                    onClick={() => onCardClick(movie.imdbID)}
                />
            )
        }
    </section>

export default Movies;