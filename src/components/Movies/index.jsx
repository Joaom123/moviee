import React from 'react';
import "./movies.css";
import {getMoviePosterOrDefaultPoster} from "../../services";

function Movies({movies, onCardClick}) {
    return (
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
    );
}

function Movie({movie, onClick}) {
    const {Title} = movie;

    return (
        <div className="card movieCard" onClick={onClick}>
            <img
                className="movieCard__imagem"
                src={getMoviePosterOrDefaultPoster(movie)}
                alt="Poster"
            />
            <div className="movieCard__info">
                <span>{Title}</span>
            </div>
        </div>
    );
}

export default Movies;