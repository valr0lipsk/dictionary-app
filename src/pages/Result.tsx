import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { fetchWords } from "../store/reducers/ActionCreators";
import { CircularProgress } from "@mui/material";

interface ResultPageParams {
  [key: string]: string;
}

const Result: FC = () => {
  const params = useParams<ResultPageParams>();
  const { isLoading, error, words } = useAppSelector(
    (state) => state.wordReducer
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWords(params.word));
  }, [params]);

  if (error)
    return (
      <>
        <h1>NOTHING FOUND</h1>
      </>
    );

  return (
    <div>
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <ul>
          {words.map((word) => (
            <li key={nanoid()}>{JSON.stringify(word, null, 2)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Result;
