import React from "react";
import Modal from "../Modal";

function ModalMovie({movie, toggleModal, onCloseModal}) {
    return (
        <Modal toggleModal={toggleModal} onCloseModal={onCloseModal}>
            <div className="modalMovie">
                <div className="modalMovie__poster">
                    <img src={movie.Poster} alt="" />
                </div>
                <div className="modalMovie__info">

                </div>
            </div>
        </Modal>
    );

}

export default ModalMovie;