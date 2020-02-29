import styled from "styled-components";

export const BlogsSection = styled.div``;

export const BlogList = styled.div`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    .card {
        max-width: 30%;
        margin-right: 10px;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        .card {
            max-width: 100%;
        }
    }
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #444444;
`;
