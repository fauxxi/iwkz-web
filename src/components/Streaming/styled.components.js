import styled from "styled-components";

export const StreamSection = styled.section`
    padding 20px;
`;

export const TitleSection = styled.div``;

export const ContentSection = styled.div`
    padding: 3rem 1.5rem;

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