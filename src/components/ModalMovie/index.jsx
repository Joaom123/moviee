import React from "react";
import Modal from "../Modal";

function ModalMovie({movie, toggleModal, onCloseModal}) {
    return (
        <Modal toggleModal={toggleModal} onCloseModal={onCloseModal}>
            <div className="modalMovie row">
                <div className="modalMovie__poster col s12 m6">
                    <img className="w-100" src={movie.Poster} alt="" />
                </div>
                <div className="modalMovie__info col s12 m6">
                    <div className="modalMovie__header">
                        <h2 className="modalMovie__title">{movie.Title}</h2>
                        <div>
                            <span className="modalMovie__genre">{movie.Genre}</span>
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