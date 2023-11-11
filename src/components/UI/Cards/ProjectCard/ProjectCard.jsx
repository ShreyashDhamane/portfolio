import React, { useRef } from "react";
import "./ProjectCard.scss";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import MotionDiv from "../../Animation/MotionDiv/MotionDiv";
import useScrollTrigger from "../../../../hooks/useScrollTrigger";
import { useDispatch } from "react-redux";
import * as actions from "../../../../store/actions/index";
import useElementOnScreen from "../../../../hooks/useElementOnScreen";

const ProjectCard = ({
  index,
  title,
  image,
  techs,
  desc,
  link,
  youtube,
  mobile = false,
}) => {
  const dispatch = useDispatch();
  const thumbnailRef = useRef(null);
  const elemScrollPos = useElementOnScreen(thumbnailRef);

  const handleMouseEnter = (e) => {
    dispatch(dispatch(actions.setMouseEntered(true)));
  };

  const handleMouseLeave = (e) => {
    dispatch(dispatch(actions.setMouseEntered(false)));
  };

  return (
    <div
      className={`Project_card ${index % 2 === 0 ? "left" : "right"} ${
        mobile ? "vertical" : ""
      }`}
      key={index}
    >
      <a ref={thumbnailRef} href={youtube || link} target="_blank">
        <div
          className={`thumbnail ${
            elemScrollPos.visible || elemScrollPos.above ? "active" : ""
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={"img_wrapper"}>
            <img src={image} alt="" />
          </div>
        </div>
      </a>

      <div className="project_info">
        <div className="info">
          <div className="title_wrapper">
            <MotionDiv
              from={{ transform: `translateY(100%)` }}
              to={{ transform: `translateY(0)` }}
              duration={600}
              scrollDiv={true}
              className="title"
            >
              {title}
            </MotionDiv>
          </div>
          <div className="desc_wrapper">
            <MotionDiv
              from={{ opacity: 0, transform: `translateY(100%)` }}
              to={{ opacity: 1, transform: `translateY(0)` }}
              duration={600}
              scrollDiv={true}
              className="desc"
            >
              {desc}
            </MotionDiv>
          </div>

          <MotionDiv
            from={{ opacity: 0, transform: `translateY(100%)` }}
            to={{ opacity: 1, transform: `translateY(0)` }}
            duration={600}
            scrollDiv={true}
            className="icons"
          >
            <a href={link} target="_blank">
              <AiFillGithub className="github" />
            </a>
            <a href={youtube} target="_blank">
              <AiFillYoutube className="youtube" />
            </a>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
