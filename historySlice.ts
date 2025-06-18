import {
  FilterDataType,
  HistoryListDataType,
} from '../../types/historyListData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HistoryState {
  allHistory: HistoryListDataType[];
  filterData: FilterDataType | null;
  filterApplied: boolean;
  caseDetails: HistoryListDataType[];
}

const initialState: HistoryState = {
  allHistory: [],
  filterApplied: false,
  filterData: null,
  caseDetails: [],
};

const historySlice = createSlice({
  name: 'requestHistory',
  initialState,
  reducers: {
    setAllHistory: (state, action: PayloadAction<HistoryListDataType[]>) => {
      state.allHistory = action.payload;
    },

    applyFilter: (state, action: PayloadAction<any>) => {
      state.filterData = action.payload?.filterData;
      state.filterApplied = true;
    },

    resetFilter: state => {
      state.filterData = null;
      state.filterApplied = false;
    },
  },
});

export const { setAllHistory, applyFilter, resetFilter } = historySlice.actions;
export default historySlice.reducer;
