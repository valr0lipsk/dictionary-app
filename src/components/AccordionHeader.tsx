import { ExpandMore } from "@mui/icons-material";
import { AccordionSummary, Typography } from "@mui/material";
import React, { FC } from "react";

interface AccordionHeaderProps {
  id: number;
  title: string;
}

const AccordionHeader: FC<AccordionHeaderProps> = ({ id, title }) => {
  return (
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography variant="h6">
        {id + 1}. {title.toUpperCase()}
      </Typography>
    </AccordionSummary>
  );
};

export default AccordionHeader;
