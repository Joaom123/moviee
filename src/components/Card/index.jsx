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
        <div className="card__info">
            <span>{props.filme.Title}</span>
            <br/>
            <span>{props.filme.Year}</span>
        </div>
    </div>
export default Card;