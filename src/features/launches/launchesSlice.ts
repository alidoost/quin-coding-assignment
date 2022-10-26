import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LaunchesState } from "../../types/launches";

const today = new Date();
const threeMonthFromNow = new Date(today.setMonth(today.getMonth() + 3));
const initialState: LaunchesState = {
  filters: {
    startDate: new Date(),
    endDate: threeMonthFromNow,
    isSuccessful: false,
  },
};

const launchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    setStartDate(state, actions: PayloadAction<Date>) {
      console.log(actions);
      state.filters.startDate = actions.payload;
    },
    setEndDate(state, actions: PayloadAction<Date>) {
      state.filters.endDate = actions.payload;
    },
    setStartEndDate(
      state,
      actions: PayloadAction<{ startDate: Date; endDate: Date }>
    ) {
      state.filters.startDate = actions.payload.startDate;
      state.filters.endDate = actions.payload.endDate;
    },

    setIsSuccessful(state, actions: PayloadAction<boolean>) {
      state.filters.isSuccessful = actions.payload;
    },
    resetParams(state) {
      state = initialState;
    },
  },
});

export const {
  setStartDate,
  setEndDate,
  setStartEndDate,
  setIsSuccessful,
  resetParams,
} = launchesSlice.actions;
export default launchesSlice.reducer;
