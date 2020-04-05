import React, { useEffect, useState } from 'react';

import {
    DEFAULT_CHANNEL_ID,
    getChannels,
    getLiveStreamId,
} from '../../api/youtubeLiveStreamService';

import LiveStreaming from './LiveStreaming';
import StreamList from './StreamList';
import ChatBox from './ChatBox';
import { StreamSection, TitleSection, ContentSection } from './styled.components';

const Streaming = () => {
    const [selectedChannel, setSelectedChannel] = useState(null);
    const [channelList, setChannelList] = useState({});
    const [streamId, setStreamId] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const isEnableChatBox = selectedChannel === DEFAULT_CHANNEL_ID;

    const onChangeChannel = (channelId) => {
        setSelectedChannel(channelId);
        getLiveStreamIdByChannel(channelId);
    };

    const getLiveStreamIdByChannel = (channelId) => {
        setLoading(true);
        getLiveStreamId(channelId, callbackStreamId);
    }

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
        <StreamSection className="section is-medium container">
            <TitleSection className="content has-text-centered">
                <h1 className="has-text-weight-medium">Live Streaming IWKZ</h1>
            </TitleSection>
            <StreamList channelList={channelList} selectedChannel={selectedChannel} onChangeChannel={onChangeChannel} />
            {
                isLoading 
                    ? (<progress className="progress is-large is-info" max="100">60%</progress>)
                    : (<ContentSection className={isEnableChatBox && "showChat"}>
                            <LiveStreaming streamId={streamId} />
                            <ChatBox isActive={isEnableChatBox} />
                        </ContentSection>) 
            }
        </StreamSection>
    );
};

export default Streaming;