"use client";

import { createContext, useReducer, useEffect, useCallback } from "react";
import { Amplify, Auth } from "aws-amplify"; // CUSTOM COMPONENT

import { SplashScreen } from "components/splash-screen"; // CONFIGURATION SETTINGS

import awsConfig from "aws-exports";
Amplify.configure({ ...awsConfig,
  ssr: true
});
const initialAuthState = {
  user: null,
  isInitialized: false,
  isAuthenticated: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      const {
        isAuthenticated,
        user
      } = action.payload;
      return { ...state,
        isAuthenticated,
        user,
        isInitialized: true
      };

    case "LOGOUT":
      return { ...state,
        isAuthenticated: false,
        user: null
      };

    default:
      return state;
  }
};

// AUTH CONTEXT INITIALIZE
export const AuthContext = createContext({});
export const AuthProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  useEffect(() => {
    (async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();

        if (user) {
          const {
            attributes: {
              sub,
              name,
              email
            }
          } = user || {};
          dispatch({
            type: "INIT",
            payload: {
              isAuthenticated: true,
              user: {
                id: sub,
                name,
                email,
                role: "admin"
              }
            }
          });
        } else {
          dispatch({
            type: "INIT",
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      } catch (error) {
        dispatch({
          type: "INIT",
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    })();
  }, []); // USER LOGIN HANDLER

  const login = useCallback(async (email, password) => {
    const user = await Auth.signIn(email, password);
    dispatch({
      type: "INIT",
      payload: {
        isAuthenticated: true,
        user: {
          id: user.attributes.sub,
          name: user.attributes.name,
          email: user.attributes.email
        }
      }
    });
  }, []); // USER REGISTER HANDLER

  const register = useCallback(async (email, password, firstName, lastName) => {
    await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
        given_name: firstName,
        family_name: lastName,
        name: `${firstName} ${lastName}`
      }
    });
  }, []); // USER EMAIL VERIFY HANDLER

  const emailVerify = useCallback(async (email, code) => {
    await Auth.confirmSignUp(email, code);
  }, []); // RESEND CODE HANDLER

  const resendCode = useCallback(async email => {
    await Auth.resendSignUp(email);
  }, []); // USER LOGOUT HANDLER

  const logout = useCallback(async () => {
    await Auth.signOut();
    dispatch({
      type: "LOGOUT"
    });
  }, []); // SHOW LOADING

  if (!state.isInitialized) return <SplashScreen />;
  return <AuthContext.Provider value={{ ...state,
    method: "AMPLIFY",
    login,
    logout,
    register,
    resendCode,
    emailVerify
  }}>
      {children}
    </AuthContext.Provider>;
};