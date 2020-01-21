import React from "react";
import "./customButton.styles.scss";
import classNames from "classnames";

const customButton = ({ donasi, prs, text }) => {
  const buttonClass = classNames("button has-text-light is-rounded ", {
    donasi: donasi,
    prs: prs
  });

  return (
    <button
      className={buttonClass}
      onClick={() => window.open("http://prs.iwkz.de/")}
    >
      {text}
    </button>
  );
};

export default customButton;
