import {
    React,
    Tail,
    Three,
    creator,
    Front,
    figma,
    bookstore,
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "HTML | CSS | JAVASCRIPT",
      icon: Front,
    },
    {
      title: "React Developer",
      icon: React,
    },
    {
      title: "Tailwind CSS",
      icon: Tail,
    },
    {
      title: "Three Js",
      icon: Three,
    },
    {
      title: "React Native",
      icon: React,
    },
    {
      title: "UI UX Design",
      icon: figma,
    },
    {
      title: "Other Languages",
      icon: creator,
    },
  ];
  
  const projects = [
    {
      name: "ONLINE BOOK STORE",
      description:
        "Web-based platform that allows users to search, book, and manage Books from various providers, providing a convenient and efficient solution.",
      tags: [
        {
          name: "React and Vite Js",
          color: "blue-text-gradient",
        },
        {
          name: "Google APIs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: bookstore,
      source_code_link: "https://github.com/SRIRAMS2002/Online-Book-Store-2.0",
    },
    
  ]

  export { services, projects };