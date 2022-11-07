import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from "./Navbar.module.css";

// Import assets
import logo from "../../assets/logo.png";

// Import React Icons
import { FaPhone } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { CgClose } from "react-icons/cg";

function Navbar(props) {

    const [nav, setNav] = useState(true);

    return (
        <>
            <nav className={s.navbar}>
                <div className={s.hiddenNav} style={nav ? { left: '-1000px' } : { left: '0px' }}>
                    <div className={s.nav}></div>
                </div>
                <Link className={s.brand} to="/">
                    <img className={s.logo} src={logo} alt="logo" />
                    <p>healthy ration</p>
                </Link>
                <section className={s.section}>
                    <div className={s.main}>
                        <ul>
                            <div
                                className={s.addition}
                                style={
                                    nav
                                        ? { left: '-1000px' }
                                        : { left: 'calc(50% - 176px/2 - 39px)' }
                                }
                                onClick={(e) => {
                                    let val = e.target.innerText;
                                    e.target.className = s.activeColor;
                                    let linksArr = document.querySelectorAll("#link");
                                    Array.from(linksArr).forEach((i) => {
                                        if (i.innerText === val) {
                                            i.className = s.activeColor;
                                        } else {
                                            i.className = s.link;
                                        }
                                    });
                                }}
                            >
                                <li>
                                    <Link id={'link'} className={s.link} to="/feeding"  >Програмы питания</Link>
                                </li>
                                <li>
                                    <Link id={'link'} className={s.link} to="/lunches" >Бизнес-ланчи</Link>
                                </li>
                                <li>
                                    <Link id={'link'} className={s.link} to="/gastro/shop" >Gastro Shop</Link>
                                </li>
                                <li>
                                    <Link id={'link'} className={s.link} to="/about" >О нас</Link>
                                </li>
                                <li>
                                    <Link id={'link'} className={s.link} to="/blog" >Блог</Link>
                                </li>
                            </div>
                            <div className={s.icons}>
                                <div className={s.icons__phone}>
                                    <FaPhone className={s.icon__phone} />
                                </div>
                                <div className={s.icon}>
                                    {
                                        nav
                                            ? <GoThreeBars className={s.icon__item} onClick={() => setNav(false)} />
                                            : <CgClose className={s.icon__item} onClick={() => setNav(true)} />
                                    }
                                </div>
                            </div>
                        </ul>
                        <div
                            className={s.language}
                            style={
                                nav
                                    ? { left: '-1000px' }
                                    : { right: '30px' }
                            }
                            onClick={(e) => {
                                let val = e.target.innerText;
                                e.target.className = s.activeBg;
                                let linksArr = document.querySelectorAll("#lang");
                                Array.from(linksArr).forEach((i) => {
                                    if (i.innerText === val) {
                                        i.className = s.activeBg;
                                    } else {
                                        i.className = s.lang;
                                    }
                                });
                            }}
                        >
                            <h1 id={'lang'} className={s.lang}>RU</h1>
                            <h1 id={'lang'} className={s.lang}>UA</h1>
                            <h1 id={'lang'} className={s.lang}>EN</h1>
                        </div>
                    </div>
                    <div className={s.phone__number} style={nav ? { left: '-1000px' } : { left: '10px' }}>
                        <p>+38 (068) 949 - 49 -19</p>
                    </div>
                </section>

            </nav >
        </>
    );
}

export default Navbar;