import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const Home = () => {
  const [value, setValue] = useState<string>("");
  const { isLoading } = useAppSelector((state) => state.wordReducer);
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      <button onClick={() => navigate("/" + value)}>Search</button>
      {isLoading && <CircularProgress color="secondary" />}
    </div>
  );
};

export default Home;
