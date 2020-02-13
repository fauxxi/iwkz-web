import styled from "styled-components";
import heroImage from "../../../img/heroImage.JPG";

export const StyledTitle = styled.p`
  @media only screen and (max-width: 600px) {
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
`;
