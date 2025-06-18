import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TUserDataState, TUserDetails} from '../../types';

// Initial state
export const userDataInitialState: TUserDataState = {
  userDetails: {} as TUserDetails,
};

// Create slice
export const createUserSlice = () => {
  return createSlice({
    name: 'userData',
    initialState: userDataInitialState,
    reducers: {
      setUserInfo: (state, action: PayloadAction<TUserDetails>) => {
        state.userDetails = action.payload;
      },
    },
  });
};
