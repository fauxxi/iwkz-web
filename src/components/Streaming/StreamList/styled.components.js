import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
`;

export const CustomList = styled.button`
  width: 200px;
  margin: 10px;
  text-align: center;
  padding: 0;
  border: 0;
  opacity: 50%;
  &:hover {
    cursor: pointer;
    opacity: 100%;
  }
  &:active {
    outline: 0;
  }
  &.is-active {
    background-color: #ffebcd;
    opacity: 100%;
    outline: 0;
  }
`;

export const CustomLink = styled.a`
  margin: 0px;
  display: block;
  width: 100%;
  height: 100%;
  padding 5px;
`;
