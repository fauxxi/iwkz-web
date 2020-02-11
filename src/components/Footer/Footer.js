import React from "react";
import "./footer.styles.scss";
import FacebookIcon from "../../img/facebook-round-color.svg";
import InstagramIcon from "../../img/instagram-round-color.svg";
import YoutubeIcon from "../../img/youtube-round-color.svg";

const Footer = () => {
  return (
    <footer className="foot level is-mobile">
      <div className="level-item">
        <p className="copyright">© 2020 IWKZ.</p>
      </div>

      <div className="level-item ">
        {
          //social media account here pls
        }
        <a
          target="_blank"
          href="https://www.facebook.com/IWKZ.Berlin"
          rel="noopener noreferrer"
        >
          <img className="icon" src={FacebookIcon} alt="facebook-icon" />
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/iwkzalfalah/"
          rel="noopener noreferrer"
        >
          <img className="icon" src={InstagramIcon} alt="instagram-icon" />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/user/alfalahberlin"
          rel="noopener noreferrer"
        >
          <img className="icon" src={YoutubeIcon} alt="youtube-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
