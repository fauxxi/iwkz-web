import React from 'react';

const StreamList = ({
    channelList,
    selectedChannel,
    
    onChangeChannel,
}) => (
    <div className="tabs is-toggle is-fullwidth is-large">
        <ul>
            {Object.keys(channelList).map((channel) => (
                <li className={selectedChannel === channel ? 'is-active' : ''}>
                    <a onClick={() => onChangeChannel(channel)}>
                        <span>{channelList[channel].name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default StreamList;