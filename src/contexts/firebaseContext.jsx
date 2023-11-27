"use client";

import { createContext, useEffect, useReducer, useCallback } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; // CUSTOM COMPONENT

import { SplashScreen } from "components/splash-screen";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const initialAuthState = {
  user: null,
  isInitialized: false,
  isAuthenticated: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AUTH_STATE_CHANGED":
      const {
        isAuthenticated,
        user
      } = action.payload;
      return { ...state,
        isAuthenticated,
        user,
        isInitialized: true
      };

    default:
      return state;
  }
}; // LOGIN WITH EMAIL HANDLER


const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}; // LOGIN WITH GOOGLE ACCOUNT HANDLER


const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}; // REGISTER USER WITH EMAIL HANDLER


const createUserWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}; // USER LOGOUT HANDLER


const logout = () => signOut(auth); // AUTH CONTEXT INITIALIZE


export const AuthContext = createContext({ ...initialAuthState,
  method: "FIREBASE",
  logout,
  signInWithGoogle,
  signInWithEmail,
  createUserWithEmail
});
export const AuthProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  const init = useCallback(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const payload = {
          isAuthenticated: true,
          user: {
            id: user.uid,
            role: "admin",
            email: user.email,
            avatar: user.photoURL,
            name: user.displayName || user.email
          }
        };
        dispatch({
          type: "AUTH_STATE_CHANGED",
          payload
        });
      } else {
        dispatch({
          type: "AUTH_STATE_CHANGED",
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    });
  }, []);
  useEffect(() => init(), [init]); // SHOW LOADING

  if (!state.isInitialized) return <SplashScreen />;
  return <AuthContext.Provider value={{ ...state,
    logout,
    signInWithEmail,
    signInWithGoogle,
    method: "FIREBASE",
    createUserWithEmail
  }}>
      {children}
    </AuthContext.Provider>;
};