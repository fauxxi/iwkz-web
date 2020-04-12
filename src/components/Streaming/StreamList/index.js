import React from "react";
import { Container, CustomList, CustomLink } from "./styled.components";
import ExampleImage from "../../../img/al-falah.svg";
import IwkzLogo from "../../../img/iwkz-navbar.svg";

const StreamList = ({
  channelList,
  selectedChannel,

  onChangeChannel,
}) => (
  <Container>
    {Object.keys(channelList)
    .filter((channelId) => !!channelList[channelId].active)
    .map((channelId) => (
      <CustomList
        className={selectedChannel === channelId ? "is-active" : ""}
        key={channelId}
      >
        <CustomLink onClick={() => onChangeChannel(channelId)}>
          <img
            src={
              channelList[channelId].name === "IWKZ Live"
                ? IwkzLogo
                : ExampleImage
            }
            alt={channelList[channelId].name}
            width="50"
            height="50"
          />
          <p>{channelList[channelId].name}</p>
        </CustomLink>
      </CustomList>
    ))}
  </Container>
);

export default StreamList;
