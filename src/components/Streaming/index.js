import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";

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
      setSelectedChannel(channelId);
    } else {
      const channelId = await getDefaultChannelId();
      setDefaultChannelId(channelId);
      setSelectedChannel(channelId);
    }
  }

  const initData = async() => {
    setInitialized(true);
    const result = await getNewConfig();

    if(result) {
      if (!defaultChannelId) {
        await initDefaultChannelId();
        await getChannelList();
  
        setLoading(false);
      }
    }
  }

  const streamData = () => {
    const data = {
      streamAvailable: false,
      streamUrl: null,
      streamId: null,
    };

    if(!Object.keys(channelList).length || selectedChannel == null || !Object.keys(channelList[selectedChannel]).length) return data;

    const { type, streamId, url } = channelList[selectedChannel];

    if (type === 'youtube' && streamId) {
      data.streamAvailable = true;
      data.streamUrl = `https://www.youtube.com/embed/${streamId}?autoplay=1`;
      data.streamId = streamId;
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

  const isYoutubeLive = streamData().streamAvailable && streamData().streamId;
  const isEnableChatBox = selectedChannel
    && Object.keys(channelList).length
    && channelList[selectedChannel].chatBox 
    && isYoutubeLive;
  const customChat = isEnableChatBox
    && isMobile
    && channelList[selectedChannel].name.toLowerCase().includes('iwkz');

  useEffect(() => {
    if(!init) {
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
            <ChatBox isActive={isEnableChatBox} streamId={streamData().streamId} customChat={customChat} />
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
