import React from "react";
import "../../style.css"

const Movie = ({movie, onClick}) =>
    <div className="card" onClick={onClick}>
        <img
            className="card__imagem"
            src={
                movie.Poster === "N/A"
                    ? "/no-poster.jpg"
                    : movie.Poster
            }
            alt=""
        />
        <div className="card__info">
            <span>{movie.Title}</span>
            <br/>
            <span>{movie.Year}</span>
        </div>
    </div>

export default Movie;