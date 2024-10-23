import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthEmptyState, IAuth} from '../models/auth';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: AuthEmptyState,
  reducers: {
    authLogIn: (state, action: PayloadAction<IAuth>) => {
      return action.payload;
    },
    authLogOut: () => {
      return AuthEmptyState;
    },
    authError: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export const {authLogIn, authLogOut, authError} = AuthSlice.actions;
export default AuthSlice.reducer;
