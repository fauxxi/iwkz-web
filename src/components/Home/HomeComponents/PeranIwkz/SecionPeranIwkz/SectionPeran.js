import React from "react";
import {
  StyledAccordion,
  StyledContent,
  StyledWrapper,
  StyledImage,
  StyledSubtitle,
  StyledTitle
} from "./styled.components";

const SectionPeran = ({ content, judul, kegiatan, image, handleAccordion }) => {
  return (
    <section className="section is-medium">
      <div className="columns is-multiline is-vcentered">
        <div className="column is-4 is-offset-2 ">
          <StyledWrapper>
            <StyledImage src={require(`${image}`)} alt={judul} />
          </StyledWrapper>
        </div>
        <div className="column is-4">
          <div className="content">
            <StyledTitle className="is-size-4">{judul}</StyledTitle>
            <StyledSubtitle>{content}</StyledSubtitle>

            {kegiatan.map(({ acara, penjelasan }, i) => (
              <div key={i}>
                <StyledAccordion
                  className="accordion"
                  onClick={e => handleAccordion(e)}
                >
                  &#8226; {acara}
                </StyledAccordion>
                <StyledContent>
                  <p>{penjelasan} </p>
                </StyledContent>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPeran;
