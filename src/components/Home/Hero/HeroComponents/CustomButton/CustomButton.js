import React from "react";
import { StyledButton } from "./styled.components";

const customButton = ({ color, text }) => {
  return (
    <StyledButton
      color={color}
      className="button has-text-light is-rounded"
      onClick={() => window.open("http://prs.iwkz.de/")}
    >
      {text}
    </StyledButton>
  );
};

export default customButton;
