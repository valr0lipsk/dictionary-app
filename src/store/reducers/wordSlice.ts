import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWord } from "../../types/word";

interface UserState {
  words: IWord[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  words: [],
  isLoading: false,
  error: null,
};

export const wordSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSUC(state, action: PayloadAction<IWord[]>) {
      state.isLoading = false;
      state.words = action.payload;
      state.error = null;
    },
    usersFetchingER(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default wordSlice.reducer;
