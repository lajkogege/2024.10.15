import React from 'react'
import Lampa from './Lampa'

function JatekTer(props) {
    function katt(adat) {
        console.log("jatekterben", adat)
        props.katt(adat)
    }

    return (
        <>{
            props.lista.map((jel, i) => {
                return <Lampa jel={jel} key={i} katt={katt} />
            })
        }

        </>
    )

}

export default JatekTer;