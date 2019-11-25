import React from "react";
import templateImage from "../../../img/winterCamp.JPG";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const SectionPeran = peran => {
  const { content } = peran;

  const [ref, inView] = useInView({
    threshold: 0.3
  });
  const props = useSpring({ opacity: inView ? 1 : 0 });
  return (
    <section className="section is-medium ">
      <animated.div style={props}>
        <div className="columns is-multiline is-vcentered" ref={ref}>
          <div className="column is-5 is-offset-1 is-hidden-touch">
            <img src={templateImage} alt={content.judul} />
          </div>
          <div className="column is-5">
            <p className="is-size-4">{content.judul}</p>
            <p>{content.content}</p>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default SectionPeran;
