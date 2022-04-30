import { AccordionDetails, Box, Link, Typography } from "@mui/material";
import { FC } from "react";
import { IWord } from "../types/word";
import MeaningsList from "./MeaningsList";
import PhoneticsList from "./PhoneticsList";

interface ABodyProps {
  word: IWord;
}

const AccordionBody: FC<ABodyProps> = ({ word }) => {
  return (
    <AccordionDetails sx={{ px: "2rem" }}>
      <Typography variant="h6" component="p">
        Phonetic: {word.phonetic}
      </Typography>
      {word.phonetics.length ? (
        <PhoneticsList phonetics={word.phonetics} />
      ) : null}
      <MeaningsList meanings={word.meanings} />
      <Box>
        <Typography variant="caption">
          srcs:
          {word.sourceUrls.map((s) => (
            <Typography variant="caption" component="span">
              <Link href={s}> {s}</Link>
            </Typography>
          ))}
        </Typography>
      </Box>
    </AccordionDetails>
  );
};

export default AccordionBody;
