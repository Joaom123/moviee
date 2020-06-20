import React from "react";
import "./snackbar.css";

function Snackbar({message, isActive}) {
    const ifIsActiveClass = isActive ? "snackbar--show" : "";

    return (
        <span className={`snackbar ${ifIsActiveClass}`}>{message}</span>
    );
}

export default Snackbar;