import React, { useState, useEffect } from "react";


const Stopwatch = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        const countdown = setInterval(() => {
        if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
        }
        if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
            clearInterval(countdown);
            } else {
            setMinutes(parseInt(minutes) - 1);
            setSeconds(59);
            }
        }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return (
        <div className="App">
        <h1>CountDown!</h1>
        <div>
            <h2>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h2>
        </div>
        </div>
    );
};

export default Stopwatch;
