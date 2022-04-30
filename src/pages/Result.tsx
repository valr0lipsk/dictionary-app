import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { fetchWords } from "../store/reducers/ActionCreators";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Divider,
  List,
  ListItemText,
  ListItem,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import AccordionHeader from "../components/AccordionHeader";
import AccordionBody from "../components/AccordionBody";

interface ResultPageParams {
  [key: string]: string;
}

const Result: FC = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const params = useParams<ResultPageParams>();
  const { isLoading, error, words } = useAppSelector(
    (state) => state.wordReducer
  );

  const dispatch = useAppDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

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
            Word: "{params.word}"
          </Typography>
          {words.map((word, index) => (
            <Accordion key={nanoid()}>
              <AccordionHeader id={index} title={word.word} />
              <AccordionBody word={word} />
            </Accordion>
          ))}
        </>
      )}
    </div>
  );
};

export default Result;
