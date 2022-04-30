import { ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import { Meaning } from "../types/word";
import CaptionBlock from "./CaptionBlock";
import DefinitionsList from "./DefinitionsList";

interface MListItemProps {
  meaning: Meaning;
}

const MListItem: FC<MListItemProps> = ({ meaning }) => {
  return (
    <ListItem sx={{ flexDirection: "column" }}>
      <ListItemText
        primary={"Part of speech: " + meaning.partOfSpeech}
        sx={{ width: "100%" }}
      />
      {meaning.synonyms.length ? (
        <CaptionBlock title="General synonyms" items={meaning.synonyms} />
      ) : null}
      {meaning.antonyms.length ? (
        <CaptionBlock title="General antonyms" items={meaning.antonyms} />
      ) : null}
      <DefinitionsList definitions={meaning.definitions} />
    </ListItem>
  );
};

export default MListItem;
