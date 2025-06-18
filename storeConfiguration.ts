import { configureStore, Store } from '@reduxjs/toolkit';
import { Persistor } from 'redux-persist';
import { combineReducers } from 'redux';
import { initialState } from '../reducers';
import { TConfigStoreParams } from '../../../src/types/core';
import towingJobStatusSlice from '../slices/towingJobStatusSlice';
import historySlice from '../slices/historySlice';
import permissionSlice from '../slices/permissionSlice';
import jobSlice from '../slices/jobSlice';

type TConfigStoreResult = {
  store: Store;
  persistor?: Persistor;
};

export function configureReduxStore({
  initState = initialState,
  slices,
}: TConfigStoreParams): TConfigStoreResult {
  const reducer = combineReducers({
    userData: slices.userData.reducer,
    allJob: jobSlice,
    towingJobStatus: towingJobStatusSlice,
    history: historySlice,
    permissionSlice: permissionSlice,
  });

  // Configure the store with middleware and persisted reducer
  const store = configureStore({
    reducer,
    preloadedState: initState,
  });

  // Create persistor
  //const persistor = persistStore(store);

  return { store };
}
