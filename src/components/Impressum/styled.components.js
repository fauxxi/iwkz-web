import styled from "styled-components";

export const SyledImage = styled.img`
  width: 200px;

  @media only screen and (max-width: 600px) {
    width: 150px;
    justify-content: center;
  }
`;

export const SyledDiv = styled.div`
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;
