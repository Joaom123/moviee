import React from 'react';

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

const Movie = ({movie, onClick}) =>
    <div className="card" onClick={onClick}>
        <img
            className="card__imagem"
            src={ movie.Poster === "N/A" ? "/no-poster.jpg" : movie.Poster }
            alt=""
        />
        <div className="card__info">
            <span>{movie.Title}</span>
            <br/>
            <span>{movie.Year}</span>
        </div>
    </div>

export default Movies;