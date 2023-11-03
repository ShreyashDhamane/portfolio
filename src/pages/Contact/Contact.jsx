import React, { useState, useEffect, useRef } from "react";
import "./Contact.scss";
import monkey from "/public/assets/images/monkey.gif";
import { AiOutlineSend, AiFillCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { GrStatusWarning } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import ScrollTriggerParallax from "../../components/UI/Animation/ScrollTrigger/ScrollTrigger";
import useTextAnim from "../../hooks/useTextAnim";
import { useSelector } from "react-redux";
import {
  initialPageLoadTimeForAnim,
  pageLoadTimeForAnim,
} from "../../shared/constants";

const Contact = () => {
  const formRef = useRef();
  const toastRef = useRef();
  const textAnimRef = useTextAnim("Let's work together");
  const SERVICE_ID = "service_3p8qlpn";
  const TEMPLATE_ID = "template_gyxhcsq";
  const PUBLIC_KEY = "z2wPjt11Dad8Q2M_X";

  const [pageLoaded, setPageLoaded] = useState(false);
  const initialPageLoading = useSelector(
    (state) => state.main.initialPageLoading
  );
  const pageLoading = useSelector((state) => state.main.pageLoading);

  useEffect(() => {
    if (pageLoading === true || initialPageLoading === true) {
      const pageLoadTime =
        initialPageLoading === true
          ? initialPageLoadTimeForAnim
          : pageLoading === true
          ? pageLoadTimeForAnim
          : 0;
      setTimeout(() => {
        setPageLoaded(true);
      }, pageLoadTime);

      window.scrollTo(0, 0);
    }
  }, [pageLoading]);

  // nope || error || success --> for toast
  const [isAnimated, setIsAnimated] = useState("none");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      formRef.current.name.value === "" ||
      formRef.current.user_email.value === "" ||
      formRef.current.message.value === ""
    ) {
      animateToast("warn");
      return;
    } else {
      if (!validateEmail(formRef.current.user_email.value)) {
        animateToast("warn_email");
        return;
      }
      if (
        formRef.current.name.value.length < 4 ||
        formRef.current.message.value.length < 4
      ) {
        animateToast("warn_length");
        return;
      }
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        animateToast("success");
      },
      (error) => {
        animateToast("error");
      }
    );
    formRef.current.reset();
  };

  const animateToast = (type) => {
    if (type === "error") {
      setIsAnimated("error");
    } else if (type === "success") {
      setIsAnimated("success");
    } else if (type === "warn") {
      setIsAnimated("warn");
    } else if (type === "warn_email") {
      setIsAnimated("warn_email");
    } else if (type === "warn_length") {
      setIsAnimated("warn_length");
    }
    setTimeout(() => {
      setIsAnimated("none");
    }, 2800);
  };

  return (
    <div className="Contact padding_top_nav container">
      <div className={`toast ${isAnimated}`} ref={toastRef}>
        {isAnimated === "error" ? (
          <>
            <BiErrorCircle />
            <span>Something went wrong, please try again!</span>
          </>
        ) : isAnimated === "success" ? (
          <>
            <AiFillCheckCircle />
            <span>I got the message, I will get back to you soon!</span>
          </>
        ) : isAnimated === "warn" ? (
          <>
            <GrStatusWarning />
            <span>Please fill in all the fields!</span>
          </>
        ) : isAnimated === "warn_email" ? (
          <>
            <GrStatusWarning />
            <span>Please enter the correct email format!</span>
          </>
        ) : isAnimated === "warn_length" ? (
          <>
            <GrStatusWarning />
            <span>Enter at least 4 characters for name or message field!</span>
          </>
        ) : null}
      </div>
      <div className="content">
        <div className="title">
          <h1 ref={textAnimRef}></h1>
          <div className="anim"></div>
        </div>
        <div className="contact_container">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className={"item" + ` ${pageLoaded ? "active" : ""}`}>
              <div className="count">01</div>
              <div className="input_container">
                <label htmlFor="name">What's your name?</label>
                <input
                  type="text"
                  placeholder="Shreyash Dhamane"
                  id="name"
                  name="name"
                />
              </div>
            </div>
            <div className={"item" + ` ${pageLoaded ? "active" : ""}`}>
              <div className="count">02</div>
              <div className="input_container">
                <label htmlFor="user_email">What's your email address?</label>
                <input
                  type="text"
                  placeholder="example@email.com"
                  id="user_email"
                  name="user_email"
                />
              </div>
            </div>
            <div className={"item" + ` ${pageLoaded ? "active" : ""}`}>
              <div className="count">03</div>
              <div className="input_container">
                <label htmlFor="company">
                  What's your company/organisation name?
                </label>
                <input
                  type="text"
                  placeholder="Zomato"
                  id="company"
                  name="company"
                />
              </div>
            </div>
            <div className={"item last" + ` ${pageLoaded ? "active" : ""}`}>
              <div className="count">04</div>
              <div className="input_container">
                <label htmlFor="message">Message you want to send?</label>
                <textarea
                  type="text"
                  placeholder="Hello shreyash, I want to hire you"
                  id="message"
                  name="message"
                />
              </div>
            </div>
            <button className="submit">
              <span>Send Message</span>
              <AiOutlineSend />
            </button>
          </form>
          <div className="contact_links"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
