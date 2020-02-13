import styled from "styled-components";
import { Link } from "react-router-dom";

export const SyledNav = styled.nav`
  position: fixed;
  border-top: 2px solid rgb(255, 136, 0);
  background-color: white;
  box-shadow: 0px 1px 20px #4444447e;
  font-size: 12px;
`;

export const StyledText = styled.p`
  color: #363636;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    font-weight: 600;
  }
`;

export const StyledLink = styled(Link)`
  background-color: #ffffff !important;
  &:focus {
    background-color: #ffffff !important;
  }
`;
