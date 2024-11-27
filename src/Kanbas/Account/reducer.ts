import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      // Update localStorage when Redux state changes
      if (action.payload) {
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
      } else {
        localStorage.removeItem('currentUser');
      }
    },
  },
});

export const getCurrentUser = (state : any) => state.accountReducer.currentUser;
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;