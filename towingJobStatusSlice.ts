import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OngoingJobStatuses } from '../../constants/OnGoingJobStatuses';

interface TowingJobStatusState {
  jobstatus: OngoingJobStatuses;
}

const initialState: TowingJobStatusState = {
  jobstatus: OngoingJobStatuses.JobNotStarted,
};

const towingJobStatusSlice = createSlice({
  name: 'towingJobStatus',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<OngoingJobStatuses>) => {
      state.jobstatus = action.payload;
    },
  },
});

export const { changeStatus } = towingJobStatusSlice.actions;
export default towingJobStatusSlice.reducer;
