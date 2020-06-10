import React from "react";
import Modal from "../Modal";
import "./modalMovie.css"
import {getMoviePosterOrDefaultPoster} from "../../services";

export default function ModalMovie({movie, toggleModal, onCloseModal}) {
    return (
        <Modal
            toggleModal={toggleModal}
            onCloseModal={onCloseModal}
            modalAdditionalClass="row modalMovie"
        >
            <MoviePoster movie={movie} />
            <MovieInfo movie={movie} />
        </Modal>
    );
}

function MoviePoster({movie}) {
    return (
        <div className="col s12 m5 modalMovie__poster">
            <img
                className="w-100 h-100"
                src={getMoviePosterOrDefaultPoster(movie)}
                alt=""
            />
        </div>
    );
}

function MovieInfo({movie}) {
    return (
        <div className="col s12 m7 modalMovie__info">
            <MovieHeader movie={movie} />
            <MovieBody movie={movie} />
        </div>
    );
}

function MovieHeader({movie}) {
    return (
        <div className="modalMovie__header">
            <h2 className="modalMovie__title">{movie.Title}</h2>
            <div className="row modalMovie__" style={{marginBottom: "0"}}>
                <span className="col s12 l6 modalMovie__genre">{movie.Genre}</span>
                <MovieBadges movie={movie} />
            </div>
            <hr />
            <div>

            </div>
        </div>
    );
}

function MovieBadges({movie}) {
    return (
        <div className="col s12 l6 modalMovie__badges">
            <span className="modalMovie__badgePill">{movie.Year}</span>
            <span className="modalMovie__badgePill">{movie.Rated}</span>
            <span className="modalMovie__badgePill">{movie.Runtime}</span>
        </div>
    );
}


function MovieBody({movie}) {
    return (
        <div className="modalMovie__body">
            <p className="modalMovie__plot">{movie.Plot}</p>
        </div>
    );
}