import React from "react";
import { auth } from "../firebase-config";

const styles = {
  message: `flex items-center gap-2 m-4 py-2 px-3 rounded`,
  sent: `bg-[#395dff] text-white flex-row-reverse float-right rounded`,
  received: `bg-[#e5e5ea] float-left rounded`,
};

const ChatMessage = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${styles.sent}`
      : `${styles.received}`;

  return (
    <div>
      <div className={`${styles.message} ${messageClass}`}>
        <img
          className="w-6 h-6 rounded-[50%]"
          src={message.photoURL}
          alt={"avatar"}
        />
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
