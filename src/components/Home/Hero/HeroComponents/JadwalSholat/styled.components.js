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

  &:hover {
    transform: scale(1.1);
    background-color: #e8ffe2;
    box-shadow: 0px 0px 10px #e8ffe2;
  }
`;

export const StyledDate = styled.p`
  font-size: 20px;
  padding-bottom: 20px;
  color: white;
  font-weight: 300;
  text-align: center;
`;
