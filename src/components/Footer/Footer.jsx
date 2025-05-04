import React from "react";
import "./Footer.scss";
import ContactFooterRotator from "../ContactFooterRotator/ContactFooterRotator";
import useTextAnim from "../../hooks/useTextAnim";
import CustomLink from "../UI/CustomLink/CustomLink";

const Footer = () => {
  return (
    <div className="Footer container">
      <div className="content_wrapper">
        <div className="left">
          <div className="title">
            <div className="text">Lets Work</div>
            <div className="text">Together</div>
          </div>
          <div className="contact_info">
            <div className="contact_item">+1 7183145488</div>
            <div className="contact_item">shreyashb.dhamane0@gmail.com</div>
          </div>
        </div>
        <CustomLink to={"/contact"} title={"Contact"} subtitle={"Get in touch"}>
          <div className="right">
            <ContactFooterRotator />
          </div>
        </CustomLink>
      </div>
      <div className="bottom container">
        <div className="bottom_group">
          <div className="bottom_item">
            <div className="helper">Version</div>
            <div className="info">2025©Edition</div>
          </div>
          {/* <div className="bottom_item">
                            <div className="helper">Local Time</div>
                            <div className="info">{ }</div>
                        </div> */}
        </div>
        <div className="bottom_group">
          <div className="bottom_item">
            <div className="helper">Socials</div>
            <div className="flex_socials">
              <a
                href="https://www.linkedin.com/in/shreyash-dhamane-006671209/"
                target="_blank"
                rel="noopener noreferrer"
                className="social_item"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/devlopersTech"
                target="_blank"
                rel="noopener noreferrer"
                className="social_item"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
