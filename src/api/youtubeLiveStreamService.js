import axios from 'axios';
import loadConfiguration from './loadConfigurations';

//move to constants
const youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';

let streamData = {};

const getStreamInfo = async() => {
    if(!Object.keys(streamData).length) {
        streamData = await loadConfiguration();

        return streamData;
    }

    return streamData;
}

export const getDefaultStreamId = async() => {
    const { DEFAULT_STREAMING_KEY } = await getStreamInfo();

    return DEFAULT_STREAMING_KEY;
}

export const getChannels = async() => {
    const { STREAMING_CHANNELS } = await getStreamInfo();

    return STREAMING_CHANNELS;
};

export const getLiveStreamId = async (channelId, cb) => {
    const { YOUTUBE_KEY, STREAMING_CHANNELS } = await getStreamInfo();

    if(STREAMING_CHANNELS[channelId].streamId) {
        return cb({ streamId: STREAMING_CHANNELS[channelId].streamId });
    }

    const defaultParams = 'part=snippet&eventType=live&maxResults=1&type=video';
    const dynamicParams = `key=${YOUTUBE_KEY}&channelId=${channelId}`;
    const url = `${youtubeUrl}?${defaultParams}&${dynamicParams}`;

    axios.get(url)
        .then(({ data }) => {
            const { items } = data;
            const streamId = items.length ? items[0].id.videoId : null;

            return cb({ streamId });
        })
        .catch(() => cb({ streamId: null}));
}