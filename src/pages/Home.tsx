import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/" + value);
    setValue("");
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={8} sm={10}>
          <TextField
            type="search"
            variant="standard"
            value={value}
            onChange={changeHandler}
            label="Enter a word"
            fullWidth
            sx={{ my: "1.3rem" }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={clickHandler}>
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
