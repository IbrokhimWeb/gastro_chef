import React from 'react';
import s from "./Carusel.module.css";

// Import React icons
import { GiCarrot, GiMasonJar, GiTable} from "react-icons/gi";

function Carusel(props) {
    return (
        <section className={s.carusel}>
            <main className={s.main}>
                <div className={s.multimedia}>
                    <div className={s.media}>
                        <p>Ккал</p>
                    </div>
                    <div className={s.media}>
                        <p>Fish</p>
                    </div>
                    <div className={s.media}>
                        <GiCarrot />
                    </div>
                    <div className={s.media}>
                        <GiMasonJar />
                    </div>
                    <div className={s.media}>
                        <p>ava</p>
                    </div>
                    <div className={s.media}>
                        <GiTable />
                        <span>5</span>
                    </div>
                </div>
                <div className={s.content}>

                </div>
                <div className={s.img}>

                </div>
                <div className={s.message}>

                </div>
            </main>
        </section>
    );
}

export default Carusel;