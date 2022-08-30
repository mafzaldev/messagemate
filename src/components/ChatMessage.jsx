import React from "react";
import { auth } from "../firebase-config";

const styles = {
  message: `flex items-center gap-2 m-3 py-2 px-3 rounded`,
  sent: ` bg-[#4D38A2] text-white flex-row-reverse float-right rounded`,
  received: `bg-[#19182A] text-white float-left rounded`,
  name: `bg-[#12121d] text-xs p-2 rounded-full`,
  date: `text-gray-500 text-xs absolute `,
  receivedDate: `left-4 bottom-[-6px]`,
  sentDate: `right-4 bottom-[-6px]`,
};

const ChatMessage = ({ message }) => {
  const containerClass =
    message.uid === auth.currentUser.uid
      ? `${styles.sent} `
      : `${styles.received}`;

  const dateClass =
    message.uid === auth.currentUser.uid
      ? `${styles.sentDate} `
      : `${styles.receivedDate}`;

  return (
    <div className="relative">
      <div className={`${styles.message} ${containerClass}`}>
        {/* <img
          className="w-6 h-6 rounded-[50%]"
          src={message.photoURL}
          alt={"avatar"}
        /> */}
        <p className={`${styles.name}`}>{message.name}</p>
        <div>
          <p>{message.text}</p>
        </div>
      </div>
      {message.timestamp?.seconds ? (
        <span className={`${styles.date} ${dateClass}`}>
          {new Date(message.timestamp.seconds * 1000).toLocaleTimeString()}
        </span>
      ) : null}
    </div>
  );
};

export default ChatMessage;
