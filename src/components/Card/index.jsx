import React from "react";
import "../../style.css"

const Card = props =>
    <div className="card" onClick={props.onClick}>
        <img
            className="card__imagem"
            src={
                props.filme.Poster === "N/A"
                    ? "/no-poster.jpg"
                    : props.filme.Poster
            }
            alt="" />
        <div>
            <p>{props.filme.Title}</p>
            <p>{props.filme.Year}</p>
        </div>
    </div>
export default Card;