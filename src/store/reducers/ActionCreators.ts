import axios from "axios";
import { IWord } from "../../types/word";
import { AppDispatch } from "../store";
import { wordSlice } from "./wordSlice";

export const fetchWords = (word: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(wordSlice.actions.usersFetching());
    const response = await axios.get<IWord[]>(
      "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
    );
    dispatch(wordSlice.actions.usersFetchingSUC(response.data));
  } catch (error) {
    dispatch(wordSlice.actions.usersFetchingER("error"));
  }
};
