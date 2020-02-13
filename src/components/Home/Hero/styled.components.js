import styled from "styled-components";
import heroImage from "../../../img/heroImage.JPG";

export const StyledTitle = styled.p`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledParallaxSection = styled.section`
  /* The image used */
  background-image: url(${heroImage});

  /* Full height */
  height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;
  @media only screen and (max-device-width: 768px) {
    background-attachment: scroll !important;
  }
`;

export const StyledDiv = styled.div`
  transition: 1.5s;
  ${props => (props.inView ? `opacity:1;` : `opacity:0;`)}
`;
