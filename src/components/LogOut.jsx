import React from "react";
import { auth } from "../firebase-config";

const styles = {
  button: `rounded shadow-button px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-600 font-medium flex items-center justify-center overflow-y-hidden focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75 hover:shadow-2xl`,
};

const LogOut = () => {
  return (
    <button onClick={() => auth.signOut()} className={styles.button}>
      Logout
    </button>
  );
};

export default LogOut;
