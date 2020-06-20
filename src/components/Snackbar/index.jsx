import React from "react";
import "./snackbar.css";

function Snackbar({message, isActive}) {
    const snackbarActiveClass = isActive ? "snackbar--show" : "";

    return (
        <span className={`snackbar ${snackbarActiveClass}`}>{message}</span>
    );
}

export default Snackbar;