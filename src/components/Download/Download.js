import React from "react";
import Iframe from "react-iframe";

const Download = () => {
  return (
    <section className="section">
      <p>download page</p>
      <Iframe
        url="https://iwkz.de/jadwal-shalat/"
        width="800px"
        height="800px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </section>
  );
};

export default Download;
