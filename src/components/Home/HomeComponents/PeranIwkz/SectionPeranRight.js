import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const SectionPeranRight = ({
  content,
  judul,
  kegiatan,
  image,
  handleAccordion
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3
  });
  const props = useSpring({ opacity: inView ? 1 : 0 });
  return (
    <section className="section ">
      <animated.div ref={ref} style={props}>
        <div className="columns is-multiline is-vcentered">
          <div className="column is-4 is-offset-2">
            <div className="content" style={{ margin: "auto 30px" }}>
              <p className="is-size-4">{judul}</p>
              <p>{content}</p>
              {kegiatan.map(({ acara, penjelasan }, i) => (
                <div key={i}>
                  <button
                    className="accordion"
                    onClick={e => handleAccordion(e)}
                  >
                    &#8226; {acara}
                  </button>
                  <div className="penjelasan">
                    <p>{penjelasan}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="column is-4  is-hidden-touch">
            <img
              src={require(`${image}`)}
              alt={judul}
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default SectionPeranRight;
