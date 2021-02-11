import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useConfirm = (message, callback, rejection) => {
    if (typeof callback !== "function") {
        return;
    }
    const confirmAction = () => {
        if (confirm(message)) {
            callback();
        } else {
            rejection();
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
