import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebase-config";
import ChatMessage from "./ChatMessage";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import SendMessage from "./SendMessage";
import Header from "./Header";

const styles = {
  main: `flex flex-col p-[10px] overflow-y-scroll`,
};

const ChatRoom = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Header />
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        <span className="mb-16" ref={scroll}></span>
      </main>
      <SendMessage scroll={scroll} />
    </>
  );
};

export default ChatRoom;
