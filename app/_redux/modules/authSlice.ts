import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  accessToken: string | null;
  userId: string;
  success: boolean;
  avatar: string | null;
  nickname: string;
};

const currentUserInit: User = {
  accessToken: "",
  userId: "",
  success: false,
  avatar: null,
  nickname: "",
};

const initialState = {
  currentUser: currentUserInit,
};

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = { ...action.payload };
    },
  },
});

export default AuthSlice.reducer;
export const { setUser } = AuthSlice.actions;
