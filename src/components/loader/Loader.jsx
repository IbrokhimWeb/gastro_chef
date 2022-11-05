import React from 'react';
import s from "./Loader.module.css";

function Loader(props) {
    return (
        <>
            <div id={s.cooking}>
                <div className={s.bubble}></div>
                <div className={s.bubble}></div>
                <div className={s.bubble}></div>
                <div className={s.bubble}></div>
                <div className={s.bubble}></div>
                <div id={s.area}>
                    <div id={s.sides}>
                        <div id={s.pan}></div>
                        <div id={s.handle}></div>
                    </div>
                    <div id={s.pancake}>
                        <div id={s.pastry}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loader;