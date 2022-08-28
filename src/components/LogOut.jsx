import React from "react";
import { auth } from "../firebase-config";

const styles = {
  button: `bg-white px-4 py-2 hover:bg-gray-100 rounded`,
};

const LogOut = () => {
  return (
    <button onClick={() => auth.signOut()} className={styles.button}>
      Logout
    </button>
  );
};

export default LogOut;
