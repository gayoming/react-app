"use client";

import { signInWithGoogle, logOut, auth } from "../firebaseConfig";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import "../styles/global.css";

const LoginButton = () => {
  const [user, setUser] = useState(null);

  // 로그인 상태 감지
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="login-container">
      {user ? (
        <div>
          <p>환영합니다, {user.displayName}!</p>
          <button onClick={logOut} className="button">로그아웃</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle} className="button">구글 로그인</button>
      )}
    </div>
  );
};

export default LoginButton;
