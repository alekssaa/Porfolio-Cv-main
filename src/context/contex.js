import {
  useState,
  useContext,
  createContext,
  useReducer,
  useEffect,
} from "react";
import React from "react";
import axios from "axios";
import reducer from "./reducer";
import {
  ACTIVE_PAGE,
  GET_DATA_BEGIN,
  GET_DATA_SUCCES,
  GET_DATA_ERROR,
} from "./action";

const initalState = {
  sidebarOpen: false,
  loadingData: true,
  errorData: false,
  data: [],
};

const contextProvaider = createContext();
export const ContextProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };
  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };

  const getData = async () => {
    dispatch({ type: GET_DATA_BEGIN });
    try {
      const res = await axios.get("../data.json");
      const data = await res.data;
      dispatch({ type: GET_DATA_SUCCES, payload: data });
    } catch (error) {
      dispatch({ type: GET_DATA_ERROR });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <contextProvaider.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </contextProvaider.Provider>
  );
};

export const useProContext = () => {
  return useContext(contextProvaider);
};
