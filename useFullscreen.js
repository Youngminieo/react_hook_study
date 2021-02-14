import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

const useFullScreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    };
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullscreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.cuurent.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            runCb(true);
        }
    };

    const exitFull = () => {
        document.exitFullscreen();
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        runCb(false);
    };
    return { element, triggerFull, exitFull };
};

const App = () => {
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    };
    const { element, triggerFull, exitFull } = useFullScreen(onFullS);
    return (
        <div className="App">
            <div ref={element}>
                <img
                    src="data:image/jpeg;base64,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"
                    alt="강아지"
                />
                <button onClick={exitFull}>exit fullScreen</button>
            </div>
            <button onClick={triggerFull}>Make fullSrcreen</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
