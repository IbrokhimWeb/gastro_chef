import React from 'react';
import { Link } from 'react-router-dom';
import s from "./Footer.module.css";

// Import assets
import logo from "../../assets/logo.png";

// Import react icons
import { BsInstagram, BsFacebook, BsWhatsapp, BsTelegram } from "react-icons/bs"

function Footer(props) {
    return (
        <>
            <footer className={s.footer}>
                <main className={s.main}>
                    <section className={s.links}>
                        <ul>
                            <li>
                                <Link className={s.link} to="/feeding"  >Програмы питания</Link>
                            </li>
                            <li>
                                <Link className={s.link} to="/lunches" >Бизнес-ланчи</Link>
                            </li>
                            <li>
                                <Link className={s.link} to="/gastro/shop" >Gastro Shop</Link>
                            </li>
                            <li>
                                <Link className={s.link} to="/about" >О нас</Link>
                            </li>
                            <li>
                                <Link className={s.link} to="/blog" >Блог</Link>
                            </li>
                        </ul>
                    </section>
                    <section className={s.brand}>
                        <img src={logo} alt="logo" />
                        <p>сервис здорового питания</p>
                    </section>
                    <section className={s.contact}>
                        <p>Условия <br /> сотрудничества</p>
                        <p className={s.faq}>FAQ</p>
                        <div className={s.social__media}>
                            <a className={s.social__fill} href="#">
                                <BsInstagram />
                            </a>
                            <a className={s.social__icons} href="#">
                                <BsFacebook />
                            </a>
                            <a className={s.social__fill} href="#">
                                <BsWhatsapp />
                            </a>
                            <a className={s.social__icons} href="#">
                                <BsTelegram />
                            </a>
                        </div>
                        <h3>+38 (068) 949 - 49 - 19</h3>
                    </section>
                </main>
            </footer>
        </>
    );
}

export default Footer;