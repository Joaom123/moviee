import React, {Component} from "react";
import "./styles.css"

class Card extends Component {
    /*
    constructor(props) {
        super(props);
    }
    */

    render() {
        return (
            <div className="card">
                <img className="card__imagem" src={this.props.filme.Poster} alt="" />
                <div>
                    <p>{this.props.filme.Title}</p>
                    <p>{this.props.filme.Year}</p>
                </div>
            </div>
        );
    }
}

export default Card;