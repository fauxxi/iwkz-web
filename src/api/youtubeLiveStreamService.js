import axios from 'axios';

//move to constants
const youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';
const apiKey = '';

export const channels = {
    iwkz: {
        id: 'UCzlY1aUSt8z0c4NKOlDWUdQ',
        name: 'IWKZ Live',
        image: '',
    },
    makkahLive: {
        id: 'UCos52azQNBgW63_9uDJoPDA',
        name: 'Makkah Live',
        image: '',
    }
};

export const getLiveStreamId = (channelName, cb) => {
    const defaultParams = 'part=snippet&eventType=live&maxResults=1&type=video';
    const dynamicParams = `key=${apiKey}&channelId=${channels[channelName].id}`;
    const url = `${youtubeUrl}?${defaultParams}&${dynamicParams}`
    axios.get(url)
    .then(({ data }) => {
        const { items } = data;
        const streamId = items.length ? items[0].id.videoId : null;
        
        return cb({ streamId });
    })
    .catch(() => cb({ streamId: null}));
}