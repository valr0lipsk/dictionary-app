import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { fetchWords } from "../store/reducers/ActionCreators";
import {
  Accordion,
  AccordionSummary,
  CircularProgress,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

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
        <Typography variant="h4" align="center" sx={{ mb: "0.7rem" }}>
          Nothing found :(
        </Typography>
      </>
    );

  return (
    <div>
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <>
          <Typography variant="h4" align="center" sx={{ mb: "0.7rem" }}>
            Word: {params.word}
          </Typography>
          {words.map((word, index) => (
            <Accordion key={nanoid()}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>
                  Meaning {index + 1}: {word.word}
                </Typography>
              </AccordionSummary>
            </Accordion>
          ))}
        </>
      )}
    </div>
  );
};

export default Result;
