import React from "react";
import Logo from "./logo";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
    return (
        <header id="home">
            <div className="container header__container">
                <h4>Hi I'm</h4>
                <h1>Ken</h1>
                <h5 className="text-light">Full-stack Developer</h5>
                <Logo />
            </div>
        </header>
    );
};

export default Header;
