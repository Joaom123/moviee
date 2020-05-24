import React from "react";
import "../../style.css"

const Card = ({filme, onClick}) =>
    <div className="card" onClick={onClick}>
        <img
            className="card__imagem"
            src={
                filme.Poster === "N/A"
                    ? "/no-poster.jpg"
                    : filme.Poster
            }
            alt=""
        />
        <div className="card__info">
            <span>{filme.Title}</span>
            <br/>
            <span>{filme.Year}</span>
        </div>
    </div>

export default Card;