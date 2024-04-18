// import React from 'react';

// const About = () => {
//     return (
//         <div className="section aboutme" style={{ backgroundImage: "url(https://s3-us-west-2.amazonaws.com/files.bradengelhardt.com/brad-bg-main.jpg)" }}>
//             <div className="opaque-bg animated fadeInDown">
//                 <h1 style={{ color: "white" }}>BRAD<span style={{ color: "#FF6363" }}>/</span>ENGELHARDT</h1>
//                 <p>WEB DESIGNER + FRONT-END DEVELOPER</p>
//             </div>
//         </div>
//     );
// };

// export default About;

// import React from 'react';
// import Collapsible from 'react-collapsible';
// import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

// const About = () => {

//     const Trigger = ({ label, isOpen }) => (
//         <div className="flex justify-between items-center bg-white bg-opacity-75 cursor-pointer px-4 py-2 border-b-2 border-orange-300">
//             <span>{label}</span>
//             <ChevronDoubleDownIcon className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//         </div>
//     );

//     return (
//         <div className="p-5 w-full">
//             <Collapsible
//                 trigger={<Trigger label="Personal Summary" />}
//                 triggerTagName="div"
//                 triggerOpenedClassName="bg-white bg-opacity-75 cursor-pointer border-b-2 border-orange-300"
//                 triggerClassName="bg-white bg-opacity-75 cursor-pointer border-b-2 border-orange-300"
//                 className="text-lg leading-loose"
//                 contentInnerClassName="p-2"
//             >
//                 <p>I'm a creative soul with a passion for technology and a drive to explore the world. My journey in tech began not too long ago, and every day brings a new learning opportunity. I'm currently honing my coding skills through the She Codes Plus Program, and I aspire to make a mark in IT. When I'm not coding, you can find me planning my next travel adventure—I'm always ready for a new experience!</p>
//             </Collapsible>
//             <Collapsible
//                 trigger={<Trigger label="Professional Summary" />}
//                 triggerTagName="div"
//                 triggerOpenedClassName="bg-white bg-opacity-75 cursor-pointer border-b-2 border-orange-300"
//                 triggerClassName="bg-white bg-opacity-75 cursor-pointer border-b-2 border-orange-300"
//                 className="text-lg leading-loose"
//                 contentInnerClassName="p-2"
//             >
//                 <p>Need someone to boost your team’s technical prowess? I’m your person! With a diverse background that spans eLearning, ICT helpdesks, office management, and customer service, I thrive in dynamic settings. My strong communication skills, keen eye for detail, and teamwork spirit are my strengths. I’m passionate about resolving challenges, delighting customers, and enhancing workplace efficiency. You can count on me to bring energy and professionalism to every project.</p>
//             </Collapsible>
//             <Collapsible
//                 trigger={<Trigger label="Key Attributes" />}
//                 triggerTagName="div"
//                 triggerOpenedClassName="bg-white bg-opacity-75 cursor-pointer border-b-2 border-orange-300"
//                 triggerClassName="bg-white bg-opacity-75 cursor-pointer border-b-2 border-orange-300"
//                 className="text-lg leading-loose"
//                 contentInnerClassName="p-2"
//             >
//                 <p>System Expertise: I ensure systems are set up flawlessly for optimal use.
//                     Problem Solver: I excel at diagnosing and addressing complex problems before they escalate.
//                     Training Enhancement: I create educational materials that elevate the user experience.
//                     Efficient Multitasker: I effectively juggle multiple tasks without missing a beat.
//                     Tailored Communicator: I communicate clearly and adjust my style to engage various audiences.
//                     Continuous Improvement: I'm always learning and staying abreast of new trends in the industry.</p>
//             </Collapsible>
//             <Collapsible
//                 trigger={<Trigger label="Industry Interests" />}
//                 triggerTagName="div"
//                 triggerOpenedClassName="bg-white bg-opacity-75 cursor-pointer border-b-2 border-orange-300"
//                 triggerClassName="bg-white bg-opacity-75 cursor-pointer border-b-2 border-orange-300"
//                 className="text-lg leading-loose"
//                 contentInnerClassName="p-2"
//             >
//                 <p>I'm passionate about web design, wireframe creation, frontend coding, and UX/UI. I strive to blend aesthetics with functionality, keeping up with the latest trends to deliver optimal user experiences. My goal is to develop intuitive and visually engaging digital products.</p>
//             </Collapsible>
//         </div>
//     );
// };

// export default About;

import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

const sections = [
    {
        title: "Personal Summary",
        content: "I'm a creative soul with a passion for technology and a drive to explore the world. My journey in tech brings a new learning opportunity every day.<br><br>I'm currently honing my coding skills through the She Codes Plus Program, and I aspire to make a mark in IT. When I'm not coding, you can find me planning my next travel adventure—I'm always ready for a new experience!"
    },
    {
        title: "Professional Summary",
        content: "Need someone to boost your team’s technical expertise? I’m your person! With a diverse background that spans eLearning, ICT helpdesks, team management, and customer service, I thrive in dynamic settings.<br><br>My strong communication skills, keen eye for detail, and teamwork spirit are my strengths. I’m passionate about resolving challenges, delighting customers, and enhancing workplace efficiency. You can count on me to bring energy and professionalism to every project."
    },
    {
        title: "Key Attributes",
        content: "System Expertise: I ensure systems are set up flawlessly for optimal use.<br>Problem Solver: I excel at diagnosing and addressing complex problems before they escalate.<br>Training Enhancement: I create educational materials that elevate the user experience.<br>Efficient Multitasker: I effectively juggle multiple tasks without missing a beat.<br>Tailored Communicator: I communicate clearly and adjust my style to engage various audiences.<br>Continuous Improvement: I'm always learning and staying abreast of new trends in the industry."
    },
    {
        title: "Industry Interests",
        content: "I'm passionate about web design, wireframe creation, frontend coding, and UX/UI. I strive to blend aesthetics with functionality, keeping up with the latest trends to deliver optimal user experiences.<br><br>My goal is to develop intuitive and visually engaging digital products that make people say 'WOW'."
    }
];

const About = () => {
    const [openSection, setOpenSection] = useState(null);

    const handleTriggerClick = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const Trigger = ({ label, section }) => (
        <div onClick={() => handleTriggerClick(section)} className="flex justify-between items-center bg-white bg-opacity-75 cursor-pointer px-4 py-2 border-b-2 border-orange-300">
            <span>{label}</span>
            <ChevronDoubleDownIcon className={`w-5 h-5 transform transition-transform ${openSection === section ? 'rotate-180' : ''}`} />
        </div>
    );

    return (
        <div className="p-5 w-full">
            {sections.map(({ title, content }, idx) => (
                <Collapsible
                    key={idx}
                    open={openSection === title}
                    trigger={<Trigger label={title} section={title} />}
                    triggerTagName="div"
                    triggerOpenedClassName="bg-white bg-opacity-75 cursor-pointer border-b-2 border-orange-300"
                    triggerClassName="bg-white bg-opacity-75 cursor-pointer border-b-2 border-orange-300"
                    className="text-lg leading-loose"
                    contentInnerClassName="p-2"
                >
                    <p>{content}</p>
                </Collapsible>
            ))}
            <div className="mt-4 flex justify-center">
                <a href="/imgs/resume.pdf" target="_blank" rel="noopener noreferrer"
                    className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default About;
