"use client";

import { createContext, useEffect, useReducer, useCallback } from "react";
import axios from "axios"; // CUSTOM LOADING COMPONENT

import { LoadingProgress } from "components/loader";
const API_URL = "http://localhost:5000";
const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const setSession = accessToken => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      {
        return {
          isInitialized: true,
          user: action.payload.user,
          isAuthenticated: action.payload.isAuthenticated
        };
      }

    case "LOGIN":
      {
        return { ...state,
          isAuthenticated: true,
          user: action.payload.user
        };
      }

    case "LOGOUT":
      {
        return { ...state,
          user: null,
          isAuthenticated: false
        };
      }

    case "REGISTER":
      {
        return { ...state,
          isAuthenticated: true,
          user: action.payload.user
        };
      }

    default:
      {
        return state;
      }
  }
};

export const AuthContext = createContext({});
export const AuthProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState); // USER LOGIN HANDLER

  const login = useCallback(async (email, password) => {
    const {
      data
    } = await axios.post(`${API_URL}/users/login`, {
      email,
      password
    });
    setSession(data.token);
    dispatch({
      type: "LOGIN",
      payload: {
        user: data
      }
    });
  }, []); // USER REGISTER HANDLER

  const register = useCallback(async (name, email, password) => {
    const {
      data
    } = await axios.post(`${API_URL}/users`, {
      name,
      email,
      password
    });
    setSession(data.token);
    dispatch({
      type: "REGISTER",
      payload: {
        user: data
      }
    });
  }, []); // USER LOGOUT HANDLER

  const logout = () => {
    setSession(null);
    dispatch({
      type: "LOGOUT"
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
          setSession(accessToken);
          const {
            data
          } = await axios.get(`${API_URL}/users/profile`);
          dispatch({
            type: "INIT",
            payload: {
              user: data,
              isAuthenticated: true
            }
          });
        } else {
          dispatch({
            type: "INIT",
            payload: {
              user: null,
              isAuthenticated: false
            }
          });
        }
      } catch (err) {
        // console.error(err);
        dispatch({
          type: "INIT",
          payload: {
            user: null,
            isAuthenticated: false
          }
        });
      }
    })();
  }, []); // show loading until not initialized

  if (!state.isInitialized) return <LoadingProgress />;
  return <AuthContext.Provider value={{ ...state,
    method: "JWT",
    login,
    register,
    logout
  }}>
      {children}
    </AuthContext.Provider>;
};