import React from 'react';

const StreamList = ({
    channelList,
    selectedChannel,
    
    onChangeChannel,
}) => (
    <div className="tabs is-toggle is-fullwidth is-large">
        <ul>
            {Object.keys(channelList).map((channelId) => (
                <li key={channelId} className={selectedChannel === channelId ? 'is-active' : ''}>
                    <a onClick={() => onChangeChannel(channelId)}>
                        <span>{channelList[channelId].name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default StreamList;