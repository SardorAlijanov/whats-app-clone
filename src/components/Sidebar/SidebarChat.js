import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Provide name for chat");

    if (roomName) {
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar scr={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h3>Room name</h3>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat}>
      <div className="sidebarChat">
        <h3>Add new Chat</h3>
      </div>
    </div>
  );
}

export default SidebarChat;
