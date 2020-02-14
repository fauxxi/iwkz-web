import styled from "styled-components";

export const SyledImage = styled.img`
  width: 200px;

  @media only screen and (max-width: 768px) {
    width: 150px;
    justify-content: center;
  }
`;

export const SyledDiv = styled.div`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
