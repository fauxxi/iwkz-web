import React from "react";
import { Container, CustomList, CustomLink } from "./styled.components";
import ExampleImage from "../../../img/al-falah.svg";

const StreamList = ({
  channelList,
  selectedChannel,

  onChangeChannel,
}) => (
  <Container>
    {Object.keys(channelList).map((channelId) => (
      <CustomList
        className={selectedChannel === channelId ? "is-active" : ""}
        key={channelId}
      >
        <CustomLink onClick={() => onChangeChannel(channelId)}>
          <img
            src={ExampleImage}
            alt="example image"
            width="112"
            height="112"
          />
        </CustomLink>
      </CustomList>
    ))}
  </Container>
);

export default StreamList;
