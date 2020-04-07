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
    {Object.keys(channelList).map((channelId) => (
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
            alt="example image"
            width="50"
            height="50"
          />
        </CustomLink>
      </CustomList>
    ))}
  </Container>
);

export default StreamList;
