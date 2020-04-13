import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  getDefaultStreamId,
  getChannels,
  getLiveStreamId,
} from "../../api/youtubeLiveStreamService";

import LiveStreaming from "./LiveStreaming";
import StreamList from "./StreamList";
import ChatBox from "./ChatBox";
import Info from './Info';
import {
  StreamSection,
  TitleSection,
  ContentSection,
  Container,
} from "./styled.components";

const Streaming = ({ match }) => {
  const [defaultStreamId, setDefaultStreamId] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [channelList, setChannelList] = useState({});
  const [streamId, setStreamId] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const isEnableChatBox = selectedChannel
    && Object.keys(channelList).length
    && channelList[selectedChannel].chatBox;
    
  const [ref, inView] = useInView({
    rootMargin: "-100px",
  });

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

  const initDefaultStreamId = async() => {
    const { params : { channelId } } = match;

    if (channelId) {
      setDefaultStreamId(channelId);
    } else {
      const streamId = await getDefaultStreamId();
      setDefaultStreamId(streamId);
    }
  }

  useEffect(() => {
    if (!defaultStreamId) {
      initDefaultStreamId();
      getChannelList();
    }

    if (!selectedChannel && defaultStreamId) {
      setSelectedChannel(defaultStreamId);
      getLiveStreamIdByChannel(defaultStreamId);
    }
  });

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

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
        <Info />
      </Container>
    </StreamSection>
  );
};

export default Streaming;
