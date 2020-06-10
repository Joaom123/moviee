import React from 'react';
import "./movies.css";
import {getMoviePosterOrDefaultPoster} from "../../services";

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

function Movie({movie, onClick}){
    return (
        <div className="card movieCard" onClick={onClick}>
            <img
                className="movieCard__imagem"
                src={getMoviePosterOrDefaultPoster(movie)}
                alt=""
            />
            <div className="movieCard__info">
                <span>{movie.Title}</span>
                {/*<br/>*/}
                {/*<span>{movie.Year}</span>*/}
            </div>
        </div>
    );
}

export default Movies;