import React, { useEffect, useState } from "react";

import {
  DEFAULT_CHANNEL_ID,
  getChannels,
  getLiveStreamId,
} from "../../api/youtubeLiveStreamService";

import LiveStreaming from "./LiveStreaming";
import StreamList from "./StreamList";
import ChatBox from "./ChatBox";
import {
  StreamSection,
  TitleSection,
  ContentSection,
  Container,
  InfoDiv,
} from "./styled.components";
import JadwalSholat from "../Home/Hero/HeroComponents/JadwalSholat/JadwalSholat";

const Streaming = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [channelList, setChannelList] = useState({});
  const [streamId, setStreamId] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const isEnableChatBox = selectedChannel === DEFAULT_CHANNEL_ID;

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const onChangeChannel = (channelId) => {
    setSelectedChannel(channelId);
    getLiveStreamIdByChannel(channelId);
  };

  const getLiveStreamIdByChannel = (channelId) => {
    setLoading(true);
    getLiveStreamId(channelId, callbackStreamId);
  };

  const callbackStreamId = ({ streamId }) => {
    setStreamId(streamId);
    setLoading(false);
  };

  const getChannelList = async () => {
    if (!Object.keys(channelList).length) {
      const channelList = await getChannels();
      setChannelList(channelList);
    }
  };

  useEffect(() => {
    //get default selected channel
    if (!selectedChannel) {
      setSelectedChannel(DEFAULT_CHANNEL_ID);
      getLiveStreamIdByChannel(DEFAULT_CHANNEL_ID);
    }

    getChannelList();
  });

  return (
    <StreamSection className=" container">
      <StreamList
        channelList={channelList}
        selectedChannel={selectedChannel}
        onChangeChannel={onChangeChannel}
      />
      <Container>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <progress className="progress is-large is-info" max="100">
              60%
            </progress>
          </div>
        ) : (
          <ContentSection className={isEnableChatBox && "showChat"}>
            <LiveStreaming streamId={streamId} />
            <ChatBox isActive={isEnableChatBox} />
          </ContentSection>
        )}
        <TitleSection className="content">
          <h2 className="has-text-weight-medium">
            {channelList[selectedChannel] != null
              ? channelList[selectedChannel].name
              : null}
          </h2>
        </TitleSection>
        <InfoDiv>
          <div
            style={{
              width: "70%",
              backgroundColor: "pink",
              marginRight: "10px",
            }}
          >
            disini kasih gambar kalender ramadhan acara sebulan(30 hari) aja
            kali ya?
          </div>
          <div
            style={{
              margin: "0 auto",
              backgroundColor: "rgba(215, 90, 90, 0.2)",
              padding: "55px",
              borderRadius: "10px",
            }}
          >
            <JadwalSholat titleColor="" />
          </div>
        </InfoDiv>
      </Container>
    </StreamSection>
  );
};

export default Streaming;
