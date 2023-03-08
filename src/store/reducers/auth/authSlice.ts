import { createSlice } from '@reduxjs/toolkit';
import { IUser, IUserState } from '../../../types/user';

const initialState: IUserState = {
  user: null,
  isLoggedIn: false
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { data } }) => {
      state.user = data;
      state.isLoggedIn = true;
    },
    logout: state => {
      state.user = initialState.user;
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: any) => state.auth.user;