import { List } from "@mui/material";
import { FC } from "react";
import { Meaning } from "../types/word";
import MListItem from "./MListItem";

interface MListProps {
  meanings: Meaning[];
}

const MeaningsList: FC<MListProps> = ({ meanings }) => {
  return (
    <>
      <List>
        {meanings.map((meaning) => (
          <MListItem meaning={meaning} />
        ))}
      </List>
    </>
  );
};

export default MeaningsList;
