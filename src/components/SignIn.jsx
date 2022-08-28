import React from "react";
import { auth } from "../firebase-config";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div>
      <GoogleButton type="light" onClick={signInWithGoogle} />
    </div>
  );
};

export default SignIn;
