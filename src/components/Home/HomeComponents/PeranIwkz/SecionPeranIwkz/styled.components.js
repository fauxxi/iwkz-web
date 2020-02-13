import styled from "styled-components";

export const StyledAccordion = styled.button`
  background-color: white;
  cursor: pointer;
  padding: 14px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  color: #444444e5;
  font-size: 14px;
  letter-spacing: 1px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
  &:hover {
    color: rgb(166, 219, 136);
  }
  &:active {
    color: rgb(166, 219, 136);
  }
`;

export const StyledTitle = styled.p`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledSubtitle = styled.p`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

/* Style the accordion panel. Note: hidden by default */
export const StyledContent = styled.div`
  font-size: 13px;
  text-align: justify;
  padding: 0 0 0 32px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledWrapper = styled.div`
  overflow: hidden;
  border-radius: 20px;
`;

export const StyledImage = styled.img`
  vertical-align: middle;
  transition: 1s;
  width: 100%;

  &:hover {
    transform: scale(1.1);
  }
`;
