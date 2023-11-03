import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import "./Cursor.scss";

const Cursor = () => {
  const cursorType = useSelector(state => state.main.cursorType);
  const mouseEntered = useSelector(state => state.main.mouseEntered);
  const cursorRef = useRef();

  useEffect(() => {
    document.addEventListener("mousemove", cursorChange);
 
    return () => {
      document.body.removeEventListener("mousemove", cursorChange);
    };
  }, []);

  // Mouse entered and leaving handler
  useEffect(() => {
    if (mouseEntered) {
      const Class = cursorType === 'link' ? 'hovered_link' : cursorType === 'project' ? 'hovered_project' : 'hovered';
      cursorRef.current?.classList?.add(Class)
    } else {
      cursorRef.current?.classList?.remove('hovered')
      cursorRef.current?.classList?.remove('hovered_link')
      cursorRef.current?.classList?.remove('hovered_project')
    }
  }, [mouseEntered])

  const cursorChange = (e) => {
    let { clientX, clientY } = e;
    if (cursorRef.current) {
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.top = `${mouseY}px`;
      cursorRef.current.style.left = `${mouseX}px`;

      if (mouseEntered) {
        cursorRef.current?.children?.classList?.add('hovered')
      } else {
        cursorRef.current?.children?.classList?.remove('hovered')
      }
    }
  };

  {
    switch (cursorType) {
      case "default":
        return <div ref={cursorRef} className="cursor_container">
          <div className="cursor_default">

          </div>
        </div>;
      case "project":
        return (
          <div ref={cursorRef} className="cursor_container">
            <div className="cursor_project"></div>
          </div>
        );
      case "link":
        return (
          <div ref={cursorRef} className="cursor_container">
            <div className="cursor_link"></div>
          </div>
        )
      case "none": return null;
      default:
        return null;
    }
  }
};

export default Cursor;
