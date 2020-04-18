import React from "react";

import { LiveStreamSection, StyledIframe } from "./styled.components";

const LiveStreaming = ({ streamAvailable, streamUrl }) => (
  <LiveStreamSection className="video">
    {(!streamAvailable && !streamUrl) && (
      <h5 className="has-text-weight-medium has-text-white has-text-centered">
        no live streaming...
      </h5>
    )}
    {
      (!streamAvailable && streamUrl) && (
        <div className="has-text-weight-medium has-text-white has-text-centered">
          <a href={streamUrl} target="_blank">
            <button class="button is-primary is-rounded">
              Join Live Streaming
            </button>
          </a>
        </div>
      )
    }
    {streamAvailable && (
      <StyledIframe
        allowFullScreen
        allow="autoplay; encrypted-media"
        src={streamUrl}
        frameBorder="0"
      />
    )}
  </LiveStreamSection>
);

export default LiveStreaming;
