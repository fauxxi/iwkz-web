import React from "react";
import Iframe from "react-iframe";

const Download = () => {
  return (
    <section className="section is-medium">
      <article className="media">
        <div className="media-content">
          <div classname="content">
            <Iframe
              url="https://iwkz.de/jadwal-shalat/"
              width="800px"
              height="1100px"
              border="0"
              frameborder="no"
              framespacing="0"
              scrolling="no"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Download;
