import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MovieData } from "../../constants/types/movieData";

type MovieState = {
  data: MovieData | null;
};

const initialState: MovieState = {
  data: null,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovieData: (state, action: PayloadAction<MovieData>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovieData } = movieSlice.actions;
export const selectMovieData = (state: RootState) => state.movies.data;

export default movieSlice.reducer;
