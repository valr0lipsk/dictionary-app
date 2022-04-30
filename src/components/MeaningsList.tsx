import { List } from "@mui/material";
import { nanoid } from "nanoid";
import { FC } from "react";
import { Meaning } from "../types/word";
import MListItem from "./MListItem";

interface MListProps {
  meanings: Meaning[];
}

const MeaningsList: FC<MListProps> = ({ meanings }) => {
  return (
    <List>
      {meanings.map((meaning) => (
        <MListItem key={nanoid()} meaning={meaning} />
      ))}
    </List>
  );
};

export default MeaningsList;
