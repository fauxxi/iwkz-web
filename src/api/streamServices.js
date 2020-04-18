import axios from 'axios';
import loadConfiguration from './loadConfigurations';

export const getDefaultChannelId = async() => {
    const { DEFAULT_STREAMING_KEY } = await loadConfiguration();

    return DEFAULT_STREAMING_KEY;
}

export const getChannels = async() => {
    const { STREAMING_CHANNELS } = await loadConfiguration();

    return STREAMING_CHANNELS;
};

export const getNewConfig = async() => {
    const { STREAM_API_URL } = await loadConfiguration();

    const url = `${STREAM_API_URL}?update=true`;

    await axios.get(url);
}