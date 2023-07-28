import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small>3 year</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className="about_icon" />
                            <h5>Projects</h5>
                            {/* <small>20+ Completed Projects</small> */}
                        </article>
                    </div>
                    <p>
                        I am Passionate web developer based in Toronto, driven by solving complex problems and embracing new technologies. <br />
                        Constantly seeking fresh challenges to foster personal and professional growth. A dedicated team player who thrives in collaboration with teammates, valuing
                        the synergy that comes from collective efforts.
                    </p>
                    {/* <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default Intro;
