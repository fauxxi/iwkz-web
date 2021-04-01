import React from "react";
import { StyledFooter, StyledIcon, StyledText } from "./styled.components";
import FacebookIcon from "../../img/facebook-round-color.svg";
import InstagramIcon from "../../img/instagram-round-color.svg";
import YoutubeIcon from "../../img/youtube-round-color.svg";
import DiscordIcon from "../../img/discord-logo.svg";

const Footer = () => {
  return (
    <StyledFooter className="footer level is-mobile">
      <div className="level-item">
        <StyledText>© 2021 IWKZ.</StyledText>
      </div>

      <div className="level-item ">
        <a
          target="_blank"
          href="https://www.facebook.com/IWKZ.Berlin"
          rel="noopener noreferrer"
        >
          <StyledIcon className="icon" src={FacebookIcon} alt="facebook-icon" />
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/iwkzalfalah/"
          rel="noopener noreferrer"
        >
          <StyledIcon
            className="icon"
            src={InstagramIcon}
            alt="instagram-icon"
          />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/user/alfalahberlin"
          rel="noopener noreferrer"
        >
          <StyledIcon className="icon" src={YoutubeIcon} alt="youtube-icon" />
        </a>
        <a
          target="_blank"
          href="https://discord.gg/QBrqSQayA7"
          rel="noopener noreferrer"
        >
          <StyledIcon className="icon" src={DiscordIcon} alt="discord" />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
