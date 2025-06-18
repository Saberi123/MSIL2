import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IncomingJob } from '../../types/incomingJobs';

interface jobState {
  incomingJobs: IncomingJob[];
  ongoingJobs: IncomingJob[];
}

const initialState: jobState = {
  incomingJobs: [],
  ongoingJobs: [],
};

const jobSlice = createSlice({
  name: 'allJob',
  initialState,
  reducers: {
    setAllJobs: (state, action: PayloadAction<IncomingJob[]>) => {
      state.incomingJobs = action.payload;
    },
    acceptAllJob: (state, action: PayloadAction<number>) => {
      const job = state.incomingJobs[action.payload];
      if (job) {
        state.ongoingJobs.push(job);
        state.incomingJobs.splice(action.payload, 1);
      }
    },
    declineAllJob: (state, action: PayloadAction<number>) => {
      state.incomingJobs.splice(action.payload, 1);
    },
  },
});

export const { setAllJobs, acceptAllJob, declineAllJob } = jobSlice.actions;
export default jobSlice.reducer;
