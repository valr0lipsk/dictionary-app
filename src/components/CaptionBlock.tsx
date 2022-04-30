import { Box, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import React, { FC } from "react";

interface CBlockProps {
  title: string;
  items: string[];
}

const CaptionBlock: FC<CBlockProps> = ({ title, items }) => {
  return (
    <Box width="100%" textAlign="left">
      <Typography variant="caption">{title}: </Typography>
      {items.map((item) => (
        <Typography key={nanoid()} component="span" sx={{ fontSize: "13px" }}>
          <Typography
            component="span"
            sx={{ fontSize: "inherit", textDecoration: "underline" }}
          >
            {item}
          </Typography>{" "}
        </Typography>
      ))}
    </Box>
  );
};

export default CaptionBlock;
