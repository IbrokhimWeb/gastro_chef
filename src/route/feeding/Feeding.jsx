import React from 'react';
import s from "./Feeding.module.css";


// Import Components
import Carusel from '../../components/carusel/Carusel';

function Feeding(props) {
    return (
        <>
            <section className="section">
                <Carusel />
                <span className={s.circle}/>
            </section>
        </>
    );
}

export default Feeding;