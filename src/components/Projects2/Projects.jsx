import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Projects.scss";
import * as actions from "../../store/actions/index";
import { projects } from "./projectsList";
import MotionDiv from "../UI/Animation/MotionDiv/MotionDiv";
import snowFlake from "/public/assets/images/snowFlake.svg";
import ProjectCard from "../UI/Cards/ProjectCard/ProjectCard";

const Projects = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="Projects_section container"
      onMouseEnter={() => dispatch(actions.setCursorType("project"))}
      onMouseLeave={() => dispatch(actions.setCursorType("default"))}
    >
      <div className="small_title">
        <div className="img_wrapper">
          <MotionDiv
            from={{ transform: `translateY(100%)` }}
            to={{ transform: `translateY(0)` }}
            duration={600}
            scrollDiv={true}
          >
            <img src={snowFlake} alt="snow-flake" />
          </MotionDiv>
        </div>
        <div className="title_container">
          <div className="text_wrapper">
            <MotionDiv
              from={{ transform: `translateY(100%)` }}
              to={{ transform: `translateY(0)` }}
              duration={600}
              scrollDiv={true}
              className="text"
            >
              Hackathons
            </MotionDiv>
          </div>
          {/* <div className="text_wrapper">
            <MotionDiv
              from={{ transform: `translateY(-100%)` }}
              to={{ transform: `translateY(0)` }}
              duration={600}
              scrollDiv={true}
              className="text"
            >
              & Papers
            </MotionDiv>
          </div> */}
        </div>
        <div className="img_wrapper">
          <MotionDiv
            from={{ transform: `translateY(100%)` }}
            to={{ transform: `translateY(0)` }}
            duration={600}
            scrollDiv={true}
          >
            <img src={snowFlake} alt="snow-flake" />
          </MotionDiv>
        </div>
      </div>

      <div className="projects_container">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              index={index}
              title={project.title}
              image={project.image}
              techs={project.techs}
              desc={project.desc}
              link={project.link}
              youtube={project.youtube}
              mobile={project.mobile}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
