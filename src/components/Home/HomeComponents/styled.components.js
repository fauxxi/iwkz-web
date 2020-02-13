import styled from "styled-components";

export const StyledTitle = styled.p`
  padding: 1px auto;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledContent = styled.p`
  padding: 10px 0px;
  text-align: justify;
  font-size: 14px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledSection = styled.section`
  background-color: #f2ffef;
  padding-bottom: 130px;
  padding-top: 250px;
`;

export const StyledDiv = styled.div`
  transition: 0.8s;
  ${props => (props.inView ? `opacity:1;` : `opacity:0;`)}
`;
