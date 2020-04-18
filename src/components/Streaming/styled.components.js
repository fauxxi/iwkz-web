import styled from "styled-components";

export const StreamSection = styled.section`
  padding: 20px;
  margin-bottom: 100px;
`;

export const TitleSection = styled.div`
  padding: 0 1.5rem;
`;

export const ContentSection = styled.div`
  padding: 1rem 1.5rem;

  &.showChat {
    display: flex;
    flex-direction: row;

    div {
      margin-right: 10px;
    }

    .video {
      width: 70%;
      height: 450px;
      padding-bottom: 0px !important;
    }

    .chatbox {
      width: 30%;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;

      div {
        margin-bottom: 10px;
        width: 100% !important;
      }
    }
  }
`;

export const Container = styled.div`
  min-height: 550px;
  transition: 1.6s;

  ${(props) => (props.inView ? `opacity:1;` : `opacity:0;`)}
`;
