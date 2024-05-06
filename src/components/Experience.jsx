import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/Python.jpg";
import java from "../assets/Java.png";
import mongodb from "../assets/Mongodb.png";
import mysql from "../assets/mysqllogo.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: python,
      title: "python",
      style: "shadow-cyan-800",
    },
    {
      id: 10,
      src: java,
      title: "java",
      style: "shadow-gray-700",
    },
    {
      id: 11,
      src: mongodb,
      title: "mongodb",
      style: "shadow-green-400",
    },
    
    {
      id: 12,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-400",
    },
    
    
    

  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</h2>
        <p className="py-6">These are the technologies I've worked with</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;