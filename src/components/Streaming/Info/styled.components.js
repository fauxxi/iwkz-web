import styled from "styled-components";

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1.5rem;
  .calendar {
    width: 70%;
    margin-right: 10px;
    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 400px;
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;