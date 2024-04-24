import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOtherFreeAction = createAsyncThunk(
  "otherFree",
  async (data: any, { dispatch }) => {

  }
);
export const fetchOtherNoviceBenefitAction = createAsyncThunk(
  "noviceBenefit",
  async (_, { dispatch }) => {

  }
);

interface IOtherState {
  otherFree: any[],
  noviceBenefit: any,
}

const otherSlice = createSlice({
  name: "other",
  initialState: (): IOtherState => ({
    otherFree: [],
    noviceBenefit: {} as any,
  }),
  reducers: {
    // 限时免费
    changeOtherFreeAction(state, { payload }) {
      state.otherFree = payload;
    },
    // 新手福利
    changeOtherNoviceBenefitAction(state, { payload }) {
      state.noviceBenefit = payload;
    },
  },
});

export const { changeOtherFreeAction, changeOtherNoviceBenefitAction } =
  otherSlice.actions;
export default otherSlice.reducer;
