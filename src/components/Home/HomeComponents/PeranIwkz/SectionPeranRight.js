import React from "react";

const SectionPeranRight = ({
  content,
  judul,
  kegiatan,
  image,
  handleAccordion
}) => {
  return (
    <section className="section is-medium">
      <div className="columns is-multiline is-vcentered">
        <div className="column is-4 is-offset-2 is-offset-1-mobile">
          <div className="content" style={{ margin: "auto 30px" }}>
            <p className="is-size-4">{judul}</p>
            <p className="peran-content">{content}</p>
            {kegiatan.map(({ acara, penjelasan }, i) => (
              <div key={i}>
                <button
                  className="accordion peran-text"
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
          <div className="image-wrapper">
            <img
              className="inner-image"
              src={require(`${image}`)}
              alt={judul}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPeranRight;
