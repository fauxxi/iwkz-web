import axios from 'axios';
import loadConfiguration from './loadConfigurations';

let streamData = {};

const getStreamInfo = async() => {
    if(!Object.keys(streamData).length) {
        streamData = await loadConfiguration();

        return streamData;
    }

    return streamData;
}

export const getDefaultChannelId = async() => {
    const { DEFAULT_STREAMING_KEY } = await getStreamInfo();

    return DEFAULT_STREAMING_KEY;
}

export const getChannels = async() => {
    const { STREAMING_CHANNELS } = await getStreamInfo();

    return STREAMING_CHANNELS;
};

export const getNewConfig = async() => {
    const { STREAM_API_URL } = await getStreamInfo();

    const url = `${STREAM_API_URL}?update=true`;

    await axios.get(url);
}