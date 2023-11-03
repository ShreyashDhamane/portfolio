import React, { useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import "./Home.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import Projects from "../../components/Projects/Projects";
import Projects2 from "../../components/Projects2/Projects";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";
import ContactRotator from "../../components/ContactRotator/ContactRotator";
import SkillsMarquee from "../../components/SkillsMarquee/SkillsMarquee";
import { useSelector } from "react-redux";
import FlexSection from "../../components/FlexSection/FlexSection";
import useScrollTrigger from "../../hooks/useScrollTrigger";
import ExtraActivities from "../../components/ExtraActivities/ExtraActivities";
import FlexSection2 from "../../components/FlexSection2/FlexSection2";

const Home = () => {
  const location = useLocation();
  const pageLoading = useSelector((state) => state.main.pageLoading);
  const roundedRef = useRef(null);
  const scrollValues = useScrollTrigger(roundedRef, 40, 20);
  const limitCurve = window.innerWidth < 768 ? 7 : 4;
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, []);

  useEffect(() => {
    if (location.search) {
      let elem = document.getElementById(location.search.split("=")[1]);
      const delay = pageLoading ? 2000 : 0;
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, delay);
        setTimeout(() => {
          setSearchParams((prev) => prev.delete("section"));
        }, delay + 1000);
      }
    }
  }, [location]);

  const goToExperience = () => {
    let elem = document.getElementById("experience");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Home">
      <div className="main_section">
        <HeroSection goToExperience={goToExperience} />
        <SkillsMarquee />

        <div id="experience">
          <Experience />
        </div>

        {/* <div className="little_flex">
          <FlexSection />
        </div> */}

        <div id="project">
          <Projects />
        </div>

        {/* <div className="little_flex">
          <FlexSection2 />
        </div> */}

        <div id="extracurricular">
          <ExtraActivities />
        </div>

        <div id="project2">
          <Projects2 />
        </div>

        <div
          className="bottom_rounded"
          style={{
            height: `${(100 - scrollValues[0]?.scrollVal) / limitCurve}vh`,
          }}
          ref={roundedRef}
        >
          <div className="rounded_div"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
