import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type userSlice = {
  firstName: string;
  lastName: string;
  email: string;
};

const initialState: userSlice = {
  firstName: "Mike",
  lastName: "Mestebeld",
  email: "m.mestebeld@outlook.com",
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },

    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },

    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFirstName, setLastName, setEmail } = movieSlice.actions;

export const selectFirstName = (state: RootState) => state.user.firstName;
export const selectLastName = (state: RootState) => state.user.lastName;
export const selectEmail = (state: RootState) => state.user.email;

export default movieSlice.reducer;
