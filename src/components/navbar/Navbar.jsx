import React from 'react';
import { Link } from 'react-router-dom';
import s from "./Navbar.module.css";

// Import assets
import logo from "../../assets/logo.png";

function Navbar(props) {
    return (
        <>
            <nav className={s.navbar}>
                <Link className={s.brand} to="/">
                    <img className={s.logo} src={logo} alt="logo" />
                </Link>
            </nav>
        </>
    );
}

export default Navbar;