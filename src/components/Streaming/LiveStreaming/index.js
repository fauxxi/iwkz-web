import React from 'react';

import { LiveStreamSection, StyledIframe } from './styled.components';

const LiveStreaming = ({ streamId }) => (
    <LiveStreamSection className="video">
        {
            !streamId && (<h5 className="has-text-weight-medium">no live streaming...</h5>)
        }
        {
            streamId && (
                <StyledIframe
                    allowFullScreen
                    allow='autoplay; encrypted-media'
                    src={`https://www.youtube.com/embed/${streamId}?autoplay=1`}
                    frameBorder="0"/>
            )
        }
      
    </LiveStreamSection>
);

export default LiveStreaming;