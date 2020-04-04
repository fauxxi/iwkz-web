import React, { useEffect, useState } from 'react';

import { channels, getLiveStreamId } from '../../api/youtubeLiveStreamService';

import LiveStreaming from './LiveStreaming';
import StreamList from './StreamList';
import { StreamSection, TitleSection, ContentSection } from './styled.components';

const Streaming = () => {
    const [selectedChannel, setSelectedChannel] = useState(null);
    const [streamId, setStreamId] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const onChangeChannel = (channelName) => {
        setSelectedChannel(channelName);
        getLiveStreamIdByChannel(channelName);
    };

    const getLiveStreamIdByChannel = (channelName) => {
        setLoading(true);
        getLiveStreamId(channelName, callbackStreamId);
    }

    const callbackStreamId = ({ streamId }) => {
        setStreamId(streamId);
        setLoading(false);
    };

    useEffect(() => {
        if (selectedChannel === null) {
            setSelectedChannel("iwkz");
            getLiveStreamIdByChannel("iwkz");
        }
    });

    return (
        <StreamSection className="section is-medium">
            <TitleSection className="content has-text-centered">
                Live Streaming IWKZ
            </TitleSection>
            <ContentSection>
                <StreamList channelList={channels} selectedChannel={selectedChannel} onChangeChannel={onChangeChannel} />
                {
                    isLoading && (<progress class="progress is-large is-info" max="100">60%</progress>)
                }
                {
                    !isLoading && (<LiveStreaming streamId={streamId} />)
                }
            </ContentSection>
        </StreamSection>
    );
};

export default Streaming;