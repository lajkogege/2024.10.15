import React from 'react';
import './JatekTer.css'

export default function Lampa(props) {
    function katt() {
        //játéktér katt fvg kell hivni? megkapta 
        console.log("katt", props.index);
    }

    return (
        <div className={`lampa ${props.jel ? "fel" : "le"}`} onClick={katt}>
            {props.jel}
        </div>
    );
}
