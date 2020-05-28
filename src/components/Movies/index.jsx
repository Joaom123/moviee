import React from 'react';
import Card from "../Card";

const Movies = ({movies, onCardClick}) =>
    <section className="moviesCards">
        {
            movies.map(movie =>
                <Card
                    key={movie.imdbID}
                    filme={movie}
                    onClick={() => onCardClick(movie.imdbID)}
                />
            )
        }
    </section>

export default Movies;