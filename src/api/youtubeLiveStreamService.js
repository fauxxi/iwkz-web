import axios from 'axios';
import loadConfiguration from './loadConfigurations';

//move to constants
const youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';

export const DEFAULT_CHANNEL_ID = 'UCzlY1aUSt8z0c4NKOlDWUdQ';

export const getChannels = async() => {
    const { YOUTUBE_CHANNELS } = await loadConfiguration();

    return YOUTUBE_CHANNELS;
};

export const getLiveStreamId = async (channelId, cb) => {
    const { YOUTUBE_KEY } = await loadConfiguration();
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