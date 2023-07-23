import React from "react";
import { useState } from "react";
import "./style.css";


export default function App() {
    //   <ItemCount stock="4"/> todavia no se para que va a servir
    const [clicks, setClicks] = useState(0)

    function handleClick(){
        setClicks(clicks + 1);
    }

    function handleClickMinus(){
        if (clicks > 1){
            setClicks(clicks - 1);
        }
    }

    return (
        <div>
            <button onClick={handleClickMinus}>
                <h1>-</h1>
            </button>
            <h1>{clicks}</h1>
            <button onClick={handleClick}>
                <h1>+</h1>
            </button>
        </div>
    );
}

