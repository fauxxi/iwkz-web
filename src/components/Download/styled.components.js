import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  cursor: pointer;

  background-color: #f2ffef;
  border-radius: 6px;
  padding: 14px 26px;
  border: none;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;

  border: 1px solid #555;
  &:focus {
    outline: 0;
  }

  animation: cta 1s infinite;

  @keyframes cta {
    0% {
      background-color: #f2ffef;
    }
    50% {
      background-color: #ebf0ff;
      box-shadow: 0px 0px 100px #ebf0ff;
    }
    100% {
      background-color: #f2ffef;
    }
  }
`;
