import React from "react";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOut from "./LogOut";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const styles = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `flex items-center justify-center gap-1 text-white text-3xl font-bold`,
  };

  return (
    <div className={styles.nav}>
      <h1 className={styles.heading}>
        Chatter
        <HiOutlineChatAlt2 value={{ color: "white" }} />
      </h1>
      {user && <LogOut />}
    </div>
  );
};

export default Navbar;
