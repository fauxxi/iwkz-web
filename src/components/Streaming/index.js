import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
  const [ref, inView] = useInView({
    rootMargin: "-100px",
  });

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
    <StreamSection className=" container" ref={ref}>
      <StreamList
        channelList={channelList}
        selectedChannel={selectedChannel}
        onChangeChannel={onChangeChannel}
      />
      <Container inView={inView}>
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
          <iframe
            src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23e3e9ff&amp;ctz=Europe%2FBerlin&amp;src=YWRtaW5AaXdrei5kZQ&amp;color=%23039BE5&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=1&amp;showTz=1&amp;hl=de&amp;mode=MONTH"
            width="100%"
            frameborder="0"
            scrolling="no"
            className="calendar"
          ></iframe>
          <div
            style={{
              margin: "0 auto",
              backgroundColor: "rgba(227, 233, 255, 0.7)",
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
