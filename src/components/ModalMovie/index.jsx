import React from "react";
import Modal from "../Modal";
import "./modalMovie.css"
import {getMoviePosterOrDefaultPoster} from "../../services";

function ModalMovie({movie, toggleModal, onCloseModal}) {
    return (
        <Modal toggleModal={toggleModal} onCloseModal={onCloseModal}>
            <div className="row modalMovie">
                <div className="col s12 m5 modalMovie__poster">
                    <img
                        className="w-100 h-100"
                        src={getMoviePosterOrDefaultPoster(movie)}
                        alt=""
                    />
                </div>
                <div className="col s12 m7 modalMovie__info">
                    <div className="modalMovie__header">
                        <h2 className="modalMovie__title">{movie.Title}</h2>
                        <div className="row" style={{marginBottom: "0"}}>
                            <span className="col s12 l6 modalMovie__genre">{movie.Genre}</span>
                            <div className="col s12 l6 modalMovie__ratedAndRuntime">
                                <span className="modalMovie__rated">{movie.Rated}</span>
                                <span className="modalMovie__runtime">{movie.Runtime}</span>
                            </div>
                        </div>
                        <hr />
                        <div>
                            
                        </div>
                    </div>
                    <div className="modalMovie__body">
                        <p className="modalMovie__plot">{movie.Plot}</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalMovie;