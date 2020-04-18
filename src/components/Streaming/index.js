import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  getNewConfig,
  getDefaultChannelId,
  getChannels,
} from "../../api/streamServices";

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
  const [init, setInitialized] = useState(false);
  const [defaultChannelId, setDefaultChannelId] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [channelList, setChannelList] = useState({});
  const [isLoading, setLoading] = useState(false);

  const isEnableChatBox = selectedChannel
    && Object.keys(channelList).length
    && channelList[selectedChannel].chatBox;
    
  const [ref, inView] = useInView({
    rootMargin: "-100px",
  });

  const onChangeChannel = (channelId) => {
    setSelectedChannel(channelId);
  };

  const getChannelList = async () => {
    if (!Object.keys(channelList).length) {
      const channelList = await getChannels();
      setChannelList(channelList);
    }
  };

  const initDefaultChannelId = async() => {
    const { params : { channelId } } = match;

    if (channelId) {
      setDefaultChannelId(channelId);
    } else {
      const channelId = await getDefaultChannelId();
      setDefaultChannelId(channelId);
    }
  }

  const initData = async() => {
    await getNewConfig();
    setInitialized(true);
  }

  const streamData = () => {
    const data = {
      streamAvailable: false,
      streamUrl: null,
    };

    if(!Object.keys(channelList).length) return data;

    const { type, streamId, url } = channelList[selectedChannel];

    if (type === 'youtube' && streamId) {
      data.streamAvailable = true;
      data.streamUrl = `https://www.youtube.com/embed/${streamId}?autoplay=1`;
    }

    if (type === 'zoom' && streamId) {
      data.streamAvailable = true;
      data.streamUrl = streamId;
    }

    if (type === 'url' && url) {
      data.streamAvailable = false;
      data.streamUrl = url;
    }

    return data;
  }

  useEffect(() => {
    if (init) {

      if (!defaultChannelId) {
        initDefaultChannelId();
        getChannelList();
      }
  
      if (!selectedChannel && defaultChannelId) {
        setSelectedChannel(defaultChannelId);
        setLoading(false);
      }
    } else {
      setLoading(true);
      initData();
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
            <LiveStreaming {...streamData()} />
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
