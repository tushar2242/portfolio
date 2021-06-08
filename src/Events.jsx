import React, { useState } from 'react';

const Events = () => {
    const [Cname , upName] = useState("Click Me");
    const [Cbg , upBg] = useState();
    const changeBtn = () =>{

        upName('You click me');
        upBg("skyblue");

    }
    return (
        <>
            <div className="outer" style ={{backgroundColor:Cbg}}>
            <button className="btn btn-outline-primary" onClick={changeBtn}>{Cname}</button>
            </div>
        </>
    )
};

export default Events;