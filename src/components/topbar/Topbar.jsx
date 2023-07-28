import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiBook, BiMessageSquareDetail, BiDownArrowAlt } from "react-icons/bi";

import "./topbar.css";

const Topbar = () => {
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <div>
            <nav>
                <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}>
                    <AiOutlineHome />
                </a>
                <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
                    <AiOutlineUser />
                </a>
                <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>
                    <BiBook />
                </a>
                {/* <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}>
                    <RiServiceLine />
                </a> */}
                <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
                    <BiMessageSquareDetail />
                </a>
            </nav>
            <div className="scroll__down">
                <a href="#contact">
                    <BiDownArrowAlt />{" "}
                </a>
            </div>
        </div>
    );
};

export default Topbar;
