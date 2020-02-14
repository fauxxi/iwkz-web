import styled from "styled-components";

export const StyledBox = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  transition: all 0.5s;
  margin: auto;
  font-size: 14px;
  font-weight: lighter;
  color: #444444;
  padding: 1rem;
  border-radius: 6px;
  ${props =>
    props.highlightCurrent
      ? `transform: scale(1.3);
    background-color: #e8ffe2;
    box-shadow: 0px 0px 10px #e8ffe2;`
      : ``}
  ${props =>
    props.highlightNext
      ? `transform: scale(1.1);
    background-color: #F3E3E4;
    box-shadow: 0px 0px 10px #F3E3E4;`
      : ``}
  &:hover {
    transform: scale(1.2);
    background-color: #fbdfc4;
    box-shadow: 0px 0px 10px #fbdfc4;
  }
  @media only screen and (max-device-width: 360px) {
    font-size: 9px;
  }
`;
//for iphone 5se
export const StyledText = styled.p`
  font-size: 10px;
  @media only screen and (max-device-width: 360px) {
    font-size: 8px;
  }
`;
export const StyledDate = styled.p`
  font-size: 20px;
  padding-bottom: 20px;
  color: white;
  font-weight: 300;
  text-align: center;
`;
