import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { auth, db } from "../firebase-config";

const styles = {
  form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0 bg-gray-100`,
  input: `w-full text-sm p-3 bg-gray-900 text-white outline-none border-none rounded-full m-1`,
  button: `w-[10%] bg-green-500 rounded-full flex justify-center items-center m-1 hover:bg-green-600 outline-none border-none`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.length > 0) {
      const { uid, photoURL, displayName } = auth.currentUser;
      await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        uid,
        photoURL,
        timestamp: serverTimestamp(),
      });
      setInput("");
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <form onSubmit={sendMessage} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button className={styles.button} type="submit">
        <FiSend />
      </button>
    </form>
  );
};

export default SendMessage;
