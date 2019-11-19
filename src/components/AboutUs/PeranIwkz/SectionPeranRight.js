import React from "react";
import templateImage from "../../../img/winterCamp.JPG";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const SectionPeranRight = peran => {
  const { content } = peran;

  const [ref, inView] = useInView({
    rootMargin: "-300px"
  });
  const props = useSpring({ opacity: inView ? 1 : 0 });
  return (
    <section className="section is-medium ">
      <animated.div ref={ref} style={props}>
        <div className="columns is-multiline is-vcentered">
          <div className="column is-5">
            <p className="is-size-4">{content.judul}</p>
            <p>{content.content}</p>
          </div>
          <div className="column is-5 is-offset-1 is-hidden-touch">
            <img src={templateImage} alt={content.judul} />
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default SectionPeranRight;
