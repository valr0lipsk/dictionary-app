import axios from "axios";
import { IWord } from "../../types/word";
import { AppDispatch } from "../store";
import { wordSlice } from "./wordSlice";

export const fetchWords = (word?: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(wordSlice.actions.wordsFetching());
    const response = await axios.get<IWord[]>(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );
    dispatch(wordSlice.actions.wordsFetchingSUC(response.data));
  } catch (error) {
    dispatch(wordSlice.actions.wordsFetchingER("error"));
  }
};
