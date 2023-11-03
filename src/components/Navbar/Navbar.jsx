import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import CustomLink from "../UI/CustomLink/CustomLink";
import "./Navbar.scss";
import MotionDiv from "../UI/Animation/MotionDiv/MotionDiv";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(null);
  const pageLoading = useSelector((state) => state.main.pageLoading);
  const initialPageLoading = useSelector(
    (state) => state.main.initialPageLoading
  );
  const mouseEntered = useSelector((state) => state.main.mouseEntered);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const links = [
    { to: "/", name: "Home", title: "Welcome", subtitle: "To my portfolio" },
    {
      to: "/#experience",
      name: "Experience",
      title: "Experience",
      subtitle: "Where I have worked",
    },
    {
      to: "/#project",
      name: "Projects",
      title: "Featured",
      subtitle: "Projects",
    },
    {
      to: "/#extracurricular",
      name: "Publications",
      title: "Publications",
      subtitle: "What I have published",
    },
    {
      to: "/#hackathon",
      name: "Hackathons",
      title: "Hackathons",
      subtitle: "What I have won",
    },
    {
      to: "/#committees",
      name: "Committees",
      title: "Committees",
      subtitle: "What I have Contributed",
    },
    {
      to: "/contact",
      name: "Contact",
      title: "Contact",
      subtitle: "Get in touch",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleSidebarOpen = () => {
    if (!sidebarOpen) {
      document.body.style.overflow = "hidden";
      dispatch(actions.setCursorType("link"));
    } else {
      window.document.body.style.overflow = "auto";
      dispatch(actions.setCursorType("default"));
    }
    setSidebarOpen((active) => !active);
  };

  const handleLinkHover = (e, speed = 20, custom = true) => {
    if (!mouseEntered && custom) {
      dispatch(actions.setMouseEntered(true));
    }
    const link = e.target;
    const width = link.offsetWidth;
    const height = link.offsetHeight;
    const x = e.clientX - link.getBoundingClientRect().left;
    const y = e.clientY - link.getBoundingClientRect().top;
    const move = speed;
    // console.log(x, width, height)
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;
    link.style.transform = `translate(${xMove}px, ${yMove}px)`;
  };

  const handleLinkLeave = (e, index, custom = true) => {
    if (mouseEntered && custom) {
      dispatch(actions.setMouseEntered(false));
    }
    const link = e.target;
    link.style.transform = `translate(0, 0)`;
  };

  const addQuery = (to, title, subtitle) => {
    //add query to url to scroll to the section
    const onHomePage = location.pathname === "/";
    navigate(`/`, { replace: true });
    if (onHomePage) {
      navigate(`/?section=${to.split("#")[1]}`, { replace: true });
      return;
    } else {
      dispatch(actions.setPageLoading(true));
      dispatch(
        actions.setPageLoadingContent({
          title: title,
          subtitle: subtitle,
        })
      );
      navigate(`/?section=${to.split("#")[1]}`, { replace: true });
    }
  };

  return (
    <>
      <div
        className={`Noman_logo ${pageLoading || sidebarOpen ? "load" : ""} ${
          scrolled && !pageLoading ? "scrolled" : ""
        } ${initialPageLoading ? "initial_load" : ""}`}
      >
        <CustomLink
          to="/"
          title="Welcome"
          subtitle="To my portfolio"
          setSidebarActive={setSidebarOpen}
        >
          <div className={`logo `}>
            <div className="n">S</div>
            <div className="info_wrapper">
              <div className="name">Shreyash Dhamane</div>
              <div className="title">Computer Engineer</div>
            </div>
          </div>
        </CustomLink>
      </div>

      <MotionDiv
        from={{ opacity: 0, transform: "translateY(-4rem)" }}
        to={{ opacity: 1, transform: "translateY(0)" }}
        style={{ zIndex: 10 }}
        pageDelay={true}
      >
        <div
          className={`Nav_links ${!scrolled ? "active" : ""} ${
            pageLoading ? "load" : ""
          }`}
        >
          {links.map((link, index) => {
            return link.to.includes("#") ? (
              <div
                key={index}
                onMouseOut={(e) => handleLinkLeave(e, index, false)}
                onMouseMove={(e) => handleLinkHover(e, 10, false)}
                onClick={() => addQuery(link.to, link.title, link.subtitle)}
              >
                <div
                  className={`link ${
                    location.search?.section === link.to.split("#")[1]
                      ? "active"
                      : ""
                  }`}
                >
                  {link.name}
                </div>
              </div>
            ) : (
              <CustomLink
                to={link.to}
                setSidebarActive={setSidebarOpen}
                key={index}
                title={link.title}
                subtitle={link.subtitle}
              >
                <div
                  key={index}
                  onMouseOut={(e) => handleLinkLeave(e, index, false)}
                  onMouseMove={(e) => handleLinkHover(e, 10, false)}
                  className={`link ${
                    location.pathname === link.to ? "active" : ""
                  }`}
                >
                  {link.name}
                </div>
              </CustomLink>
            );
          })}
        </div>
      </MotionDiv>

      <div
        className={`Nav_Menu ${
          pageLoading || initialPageLoading ? "load" : ""
        } ${!scrolled ? "not_scrolled" : ""}`}
      >
        <svg
          className={`ham ${sidebarOpen ? "open" : ""}`}
          viewBox="0 0 100 100"
          width="80"
          onClick={handleSidebarOpen}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
      </div>

      <div
        className={`Sidebar ${
          sidebarOpen ? "open" : sidebarOpen !== null && "close"
        }`}
      >
        <div className="links_wrapper container hide_scrollbar">
          <div className="links_container ">
            <div className="helper_text">Menu</div>
            {links.map((link, index) => (
              <CustomLink
                className="link_wrapper"
                animationDelay={index / 13}
                to={link.to}
                setSidebarActive={setSidebarOpen}
                key={index}
                title={link.title}
                subtitle={link.subtitle}
              >
                <div
                  onMouseOut={(e) => handleLinkLeave(e, index)}
                  onMouseMove={handleLinkHover}
                  className={`link ${
                    location.pathname === link.to ? "active" : ""
                  }`}
                >
                  {link.name}
                </div>
              </CustomLink>
            ))}
          </div>
        </div>
        <div className="right_rounded">
          <div className="rounded_div"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
