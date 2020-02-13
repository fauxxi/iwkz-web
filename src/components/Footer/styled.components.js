import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 15px 0;
  background-color: #8cd37a;
`;

export const StyledText = styled.p`
  color: white;
  font-size: small;
`;

export const StyledIcon = styled.img`
  width: auto;
  background-color: white;
  border-radius: 100%;
  cursor: pointer;
  margin-left: 15px;

  transition: 0.2s;
  &:hover {
    transform: scale(1.3);
  }
`;
