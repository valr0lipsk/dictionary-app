import { Mic, ExpandLess, ExpandMore, Circle } from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  ListItem,
  Box,
  Link,
  Typography,
} from "@mui/material";
import { nanoid } from "nanoid";
import React, { FC, useState } from "react";
import { Phonetic } from "../types/word";

interface PListProps {
  phonetics: Phonetic[];
}

const PhoneticsList: FC<PListProps> = ({ phonetics }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Mic />
        </ListItemIcon>
        <ListItemText primary="Phonetics" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {phonetics.map((p) => (
            <ListItem key={nanoid()} sx={{ pl: 4 }}>
              <ListItemIcon>
                <Circle sx={{ fontSize: "11px" }} />
              </ListItemIcon>
              <ListItemText primary={p.text} />
              <Box display="flex" flexDirection="column">
                <audio controls src={p.audio}>
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
                <Typography variant="caption">
                  src:
                  <Link href={p.sourceUrl}> {p.sourceUrl}</Link>
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default PhoneticsList;
