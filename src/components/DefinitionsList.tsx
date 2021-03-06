import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { nanoid } from "nanoid";
import React, { FC } from "react";
import { Definition } from "../types/word";
import CaptionBlock from "./CaptionBlock";

interface DListProps {
  definitions: Definition[];
}

const DefinitionsList: FC<DListProps> = ({ definitions }) => {
  return (
    <List sx={{ width: "100%" }}>
      {definitions.map((def) => (
        <Box key={nanoid()}>
          <Divider />
          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <ListItemText primary={def.definition} />
            {def.example ? (
              <Typography variant="caption" color="text.secondary">
                Example: {def.example}
              </Typography>
            ) : null}
            {def.synonyms.length ? (
              <CaptionBlock title="Synonyms" items={def.synonyms} />
            ) : null}
            {def.antonyms.length ? (
              <CaptionBlock title="Antonyms" items={def.antonyms} />
            ) : null}
          </ListItem>
        </Box>
      ))}
    </List>
  );
};

export default DefinitionsList;
