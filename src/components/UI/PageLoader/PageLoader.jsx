import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions/index";
import "./PageLoader.scss";
import { initialPageLoadTime, pageLoadTime } from "../../../shared/constants";

const PageLoader = () => {
  const pageLoading = useSelector((state) => state.main.pageLoading);
  const pageLoadingType = useSelector((state) => state.main.pageLoadingType);
  const pageLoadingContent = useSelector(
    (state) => state.main.pageLoadingContent
  );
  const initialPageLoading = useSelector(
    (state) => state.main.initialPageLoading
  );
  const dispatch = useDispatch();
  const hellos = Array.from({ length: 7 }, () => "Hello");

  useEffect(() => {
    if (initialPageLoading === false && pageLoading === true) {
      setTimeout(() => {
        dispatch(actions.setPageLoading(false));
      }, pageLoadTime);
    }
  }, [pageLoading]);

  useEffect(() => {
    if (initialPageLoading === true) {
      setTimeout(() => {
        dispatch(actions.setInitialPageLoading(false));
      }, initialPageLoadTime);
    }
  }, []);

  useEffect(() => {
    if (pageLoading || initialPageLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [pageLoading, initialPageLoading]);

  return (
    <div
      className={`Page_loader ${pageLoading ? "loading" : ""} ${
        initialPageLoading ? "initial_load" : ""
      }`}
    >
      <div className="top_rounded">
        <div className="rounded_div"></div>
      </div>
      <div className="loader">
        {
          // initialPageLoading ? <div className={`intro_anim_container ${initialPageLoading ? 'anim' : ''}`}>
          initialPageLoading ? (
            <div className={`intro_anim_container anim`}>
              <div className="hello_anim ">
                {hellos.map((hello, index) => {
                  return (
                    <div className="txt" key={index}>
                      {hello}
                      <div
                        className="txt_overlay"
                        style={{ "--delay": `${index * 100}` }}
                      >
                        {hello}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="name_info_anim">
                <div className="me_anim">I am</div>
                <div className="name">Shreyash Dhamane</div>
              </div>
              <div className="final_anim">A Computer Engineer</div>
            </div>
          ) : (
            <div className={`logo ${pageLoading ? "loading" : ""}`}>S</div>
          )
        }

        {!initialPageLoading && (
          <div
            className={`helper_text ${
              pageLoading || initialPageLoading ? "loading" : ""
            }`}
          >
            <div div className="sub_text">
              {pageLoadingContent.title}
            </div>
            <div className="main_text">{pageLoadingContent.subtitle}</div>
          </div>
        )}
      </div>
      <div className="bottom_rounded">
        <div className="rounded_div"></div>
      </div>
    </div>
  );
};

export default PageLoader;
