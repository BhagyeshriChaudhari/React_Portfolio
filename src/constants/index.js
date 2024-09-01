import {  
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    A,
    D,
    M,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },   
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "Web Developer (Internship)",
      company_name: "SevenMentor ",
    
      iconBg: "#383E56",
      date: "Feb 2023 - Sep 2023",
      points: [
        "Developing and maintaining web applications using HTML5,CSS3,JS and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
   
      ],
    },
    {
      title: "Jr Software Developer",
      company_name: "Trad International Golf Services",
      
      iconBg: "#E6DEDD",
      date: "NOV 2023 - APRIL 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
   
  ];
  

  
  const projects = [
    {
      name: "NFT ALIEN",
      description:
        "Web-based platform to showcase the animation effect towards team.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS 3",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "AOS",
          color: "green-text-gradient",
        },
      ],
      image: A,
      source_code_link: "https://github.com/",
      demo_link: "https://bhagyeshrichaudhari.github.io/TaskUI/Task_UI%20Developer/Index.html" ,
    },
    {
      name: "D-MART",
      description:
        "Web application that enables users search out  daily fresh product with special offer on various category. ",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "BOOTSTRAP",
          color: "blue-text-gradient",
        },
      ],
      image: D,
      source_code_link: "https://github.com/",
      demo_link: "https://bhagyeshrichaudhari.github.io/Dmart/" ,
    },
    {
      name: "BLUE FAMILY",
      description:
        "Music application of Darshan Raval famous songs to be listen by his loved onces ..",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image:M ,
      source_code_link: "https://github.com/",
      demo_link: "https://bhagyeshrichaudhari.github.io/Blue-/Blue.html" ,
    },
  ];
  
  export { services, technologies, experiences,  projects };