import React, { Component, } from "react";
import "../../style.css";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";

class Modal extends Component {

    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "4%",
            endingTop: "10%"
        };



        console.log(this.props.open)
        if(this.props.open) {
            M.Modal.init(this.Modal, options);
            let instance = M.Modal.getInstance(this.Modal);
            instance.open();

        }
        // instance.close();
        // instance.destroy();
    }

    componentDidUpdate(prevProps) {
        // Uso típico, (não esqueça de comparar as props):
        if (this.props.open !== prevProps.open) {
            console.log("oi")
        }
    }

    render() {
        const { movie } = this.props;

        return (
            <div
                ref={ Modal => { this.Modal = Modal; } }
                id="modal"
                className="modal1"
            >
                <div className="modal-content">
                    {movie.Title}
                </div>
            </div>
        );
    }
}

export default Modal;
