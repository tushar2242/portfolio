import React, { useState } from "react";
import "./index.css";

const Clicked = () => {

    const increase1 = () => {
    setCount(num + 1);
    };    
    const state = useState();
    const [num ,  setCount] = useState(1);
    return (
        <>
            <div className="outer">
                <div className="digital_box">
                    <h2>{num}</h2>
                    <button onClick={increase1}>Incease this </button>
                </div>
            </div>
        </>
    )
};

export default Clicked;