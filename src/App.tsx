import React, { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchWords } from "./store/reducers/ActionCreators";

function App() {
  const { isLoading, words, error } = useAppSelector(
    (state) => state.wordReducer
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWords("hello"));
  }, []);

  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }

  return <>{JSON.stringify(words, null, 2)}</>;
}

export default App;
