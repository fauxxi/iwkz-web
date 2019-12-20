import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const SectionPeran = ({ content, judul, kegiatan, image }) => {
  const [ref, inView] = useInView({
    threshold: 0.3
  });
  const props = useSpring({ opacity: inView ? 1 : 0 });
  return (
    <section className="section is-medium ">
      <animated.div style={props}>
        <div className="columns is-multiline is-vcentered" ref={ref}>
          <div className="column is-5 is-offset-1 is-hidden-touch">
            <img src={require(`${image}`)} alt={judul} />
          </div>
          <div className="column is-5">
            <div className="content">
              <p className="is-size-4">{judul}</p>
              <p>{content}</p>
              <ul>
                {kegiatan.map((acara, i) => (
                  <li key={i}>{acara}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default SectionPeran;
