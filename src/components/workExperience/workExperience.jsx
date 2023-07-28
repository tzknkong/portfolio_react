import React, { useState } from "react";
import { BsLink } from "react-icons/bs";
import "./workExperience.css";

const workExperience = () => {
    const exp = [
        {
            id: 1,
            time: "11/2021 - Present",
            company: "Octopus Infotech Limited",
            title: "Programmer",
            description:
                "Collaborated with the Hong Kong book supplier to develop a comprehensive Content Management System (CMS) for managing the book purchase process.Implemented interactive and engaging features to streamline the ordering and management process for schools and libraries.",
            technologies: ["Java", "JavaScript", "TypeScript", "React", "NodeJs", "MYSQL", "MongoDB", "Spring boot", "HTML", "CSS"],
            link: ["https://hkpl.nblib.com/"],
        },
        {
            id: 2,
            time: "01/2020 – 10/2021",
            company: "Sing Tao News Corporation Limited",
            title: "Programmer",
            description:
                "Development of an internal Content Management System (CMS) to replace the outdated system, resulting in improved efficiency and streamlined content editing processes.Collaborated with cross-functional teams to analyze business requirements and successfully translated them into detailed technical specifications.Provided exceptional technical support and troubleshooting for existing systems and news websites, promptly resolving issues to ensure seamless operations.",
            technologies: ["PHP", "JavaScript", "MYSQL", "HTML", "CSS"],
            link: ["https://std.stheadline.com/"],
        },
    ];
    return (
        <section id="workExperience">
            <h2>Work Experience</h2>
            <div className="workexperience__container">
                {exp.map((i) => (
                    <div className="workexperience__content">
                        <div className="content_time uppercase">{i.time}</div>
                        <div>
                            <span>{i.company}</span>
                            <div className="title">{i.title}</div>
                            <div className="description">{i.description}</div>

                            <ul>
                                {i.technologies.map((a) => {
                                    return <li>{a}</li>;
                                })}
                            </ul>
                            <a href={i.link} target="_blank" rel="noreferrer">
                                <BsLink size={25} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default workExperience;
