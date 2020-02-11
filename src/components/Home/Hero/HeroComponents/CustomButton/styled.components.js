import styled from "styled-components";

export const StyledButton = styled.button`
  transition: transform 0.2s;
  border: none;
  background-image: ${props => handleColor(props.color)};
  &:hover {
    transform: scale(1.1);
  }
`;

const handleColor = color => {
  switch (color) {
    case "donasi":
      return `linear-gradient(to right, #89216b, #da4453);`;
    case "prs":
      return `linear-gradient(to right, #11998e, #38ef7d);`;
    default:
      return "";
  }
};
