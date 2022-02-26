import React from "react";
import "./footer.sass";
import footerConfig from "../../configs/footer-config";
import Arrow from "../../assets/svg/select-arrow.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-list">
          <div className="footer-menu">
            {footerConfig?.footerLeft?.map(item => (
              <span key={item?.id}>{item?.name}</span>
            ))}
          </div>
          <div className="footer-menu">
            {footerConfig?.footerCenter?.map(item => (
              <span key={item?.id}>{item?.name}</span>
            ))}
          </div>
          <div className="footer-menu">
            {footerConfig?.footerRight?.map(item => (
              <span key={item?.id}>{item?.name}</span>
            ))}
          </div>
        </div>
        <div className="footer-right">
          <div className="social-media">
            <span>Follow Us!</span>
            <div className="icons">
              {footerConfig?.socialMedia?.map(item => (
                <span key={item?.id}>
                  <img src={item?.icon} alt="socialMedia" />
                </span>
              ))}
            </div>
          </div>
          <div className="site-language">
            <span className="language-title">Site Language</span>
            <span className="selection">
              <span>English</span> <img src={Arrow} alt="arrow"/>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <span>
              Terms of Use
          </span>
          <span>
              Privacy Policy
          </span>
          <span>
              Cookies
          </span>
        </div>
        <span>
            Tüm hakları saklıdır.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
