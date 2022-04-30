import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { fetchWords } from "../store/reducers/ActionCreators";
import { Accordion, LinearProgress, Typography, Box } from "@mui/material";
import AccordionHeader from "../components/AccordionHeader";
import AccordionBody from "../components/AccordionBody";

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
    <Box>
      {isLoading ? (
        <LinearProgress color="secondary" />
      ) : (
        <>
          <Typography variant="h4" align="center" sx={{ mb: "0.7rem" }}>
            Word: "{params.word}"
          </Typography>
          {words.map((word, index) => (
            <Accordion key={nanoid()} sx={{ w: "100%" }}>
              <AccordionHeader id={index} title={word.word} />
              <AccordionBody word={word} />
            </Accordion>
          ))}
        </>
      )}
    </Box>
  );
};

export default Result;
