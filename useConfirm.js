import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useConfirm = (message, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel || typeof onCancel !== "function") {
        return;
    }

    const confirmAction = () => {
        if (confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }; 
    return confirmAction;
};

const App = () => {
    const deleteWorld = () => console.log("Delete the World...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you Sure ?", deleteWorld, abort);

    return (
        <div className="App">
            <button onClick={confirmDelete}>Delete the World</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
