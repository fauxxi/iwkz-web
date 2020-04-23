import React from "react";

import { ChatBoxSection } from "./styled.components";

const ChatBox = ({ isActive, streamId }) =>{
  let chatSource = "https://www5.cbox.ws/box/?boxid=918815&boxtag=4PBvyW";

  if (isActive && streamId) {
    chatSource = `https://www.youtube.com/live_chat?v=${streamId}&embed_domain=iwkz.de`;
  }

  return isActive && (
    <ChatBoxSection className="chatbox">
      <iframe
        src={chatSource}
        width="100%"
        height="450"
        allowtransparency="yes"
        allow="autoplay"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        scrolling="auto"
      ></iframe>
    </ChatBoxSection>
  );
};

export default ChatBox;
