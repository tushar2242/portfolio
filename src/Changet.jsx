import React, { useState } from "react";

let time = () => {
    const curr_time = new Date();
    const curr_date = curr_time.toTimeString();
    return (curr_date)
}

const Changet = () => {
    const [getme, none] = useState(time);
    const gettime = () => {
        none(time);
    }
    return (
        <>
            <h1>Hello Taa</h1>
            <h3>Time is now  : {getme}</h3>
            <button onClick={gettime}>Get Real Time</button>
        </>
    )
};
export default Changet;