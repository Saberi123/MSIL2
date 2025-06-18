import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cameraPermission: false,
  locationPermission: false,
  notificationPermission: false,
};

const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    updateCameraPermission: (state, action) => {
      state.cameraPermission = action.payload;
    },
    updateLocationPermission: (state, action) => {
      state.locationPermission = action.payload;
    },
    updateNotificationPermission: (state, action) => {
      state.notificationPermission = action.payload;
    },
  },
});

export const {
  updateCameraPermission,
  updateLocationPermission,
  updateNotificationPermission,
} = permissionSlice.actions;
export default permissionSlice.reducer;
