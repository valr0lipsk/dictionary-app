import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWord } from "../../types/word";

interface AppState {
  words: IWord[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AppState = {
  words: [],
  isLoading: false,
  error: null,
};

export const wordSlice = createSlice({
  name: "word",
  initialState: initialState,
  reducers: {
    wordsFetching(state) {
      state.isLoading = true;
    },
    wordsFetchingSUC(state, action: PayloadAction<IWord[]>) {
      state.isLoading = false;
      state.words = action.payload;
      state.error = null;
    },
    wordsFetchingER(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.words = [];
      state.error = action.payload;
    },
  },
});

export default wordSlice.reducer;
