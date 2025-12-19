"use client";

import "@styles/Navbar.css";
import Link from "next/link";

const Navbar = () => {

    return (
        <nav className="desktop-navbar">
            <div className="logo">Vocatio</div>
            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/product">Producto</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/about">Acerca de</Link></li>
                <li><Link className="nav-login-button" href="/login">Iniciar Sesión</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;