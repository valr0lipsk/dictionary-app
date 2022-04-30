import {
  AccordionDetails,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { IWord } from "../types/word";
import MeaningsList from "./MeaningsList";

interface ABodyProps {
  word: IWord;
}

const AccordionBody: FC<ABodyProps> = ({ word }) => {
  return (
    <AccordionDetails sx={{ px: "2rem" }}>
      <Typography variant="h6" component="p">
        Phonetic: {word.phonetic}
      </Typography>
      <MeaningsList meanings={word.meanings} />
    </AccordionDetails>
  );
};

export default AccordionBody;
