import React from "react";
import CV from "../../assets/Tszkin_Kong_Resume.pdf";
import { BsLinkedin, BsDownload, BsLink, BsCloudDownloadFill, BsCloudDownload } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Logo = () => {
    return (
        <div className="cta">
            <a href="https://www.linkedin.com/in/tsz-kin-kong/" target="_blank" rel="noreferrer">
                <BsLinkedin size={48} />
            </a>
            <a href="https://github.com/tzknkong" target="_blank" rel="noreferrer">
                <FaGithub size={48} />
            </a>
            <a href={CV} target="_blank" rel="noreferrer">
                <BsLink size={48} />
            </a>
        </div>
    );
};

export default Logo;
