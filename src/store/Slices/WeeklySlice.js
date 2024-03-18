import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Create_Weekly_Quiz, Get_Weekly_Quiz_By_StudentID, Update_Weekly_Quiz } from "../Actions/weeklyActions";

let initialState = {
  loading: false,
  Questions:[],
  Questions_of_Student:[]
};

const WeeklySlice = createSlice({
  name: "WeeklySlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Create_Weekly_Quiz.pending, (state) => {
        state.loading = true;
      })
      .addCase(Create_Weekly_Quiz.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          // console.log(action.payload);
          state.Questions = action.payload.data;
          state.loading = false;
        } else {
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        }
      })
      .addCase(Create_Weekly_Quiz.rejected, (state) => {
        state.loading = false;
      })
      .addCase(Get_Weekly_Quiz_By_StudentID.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_Weekly_Quiz_By_StudentID.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          // console.log(action.payload);
          state.Questions_of_Student = action.payload.data.weeklyQuiz;
          state.loading = false;
        } else {
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        }
      })
      .addCase(Get_Weekly_Quiz_By_StudentID.rejected, (state) => {
        state.loading = false;
      })
      .addCase(Update_Weekly_Quiz.pending, (state) => {
        state.loading = true;
      })
      .addCase(Update_Weekly_Quiz.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.Questions_of_Student = action.payload.data.updatedPerformance;
          state.loading = false;
        } else {
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        }
      })
      .addCase(Update_Weekly_Quiz.rejected, (state) => {
        state.loading = false;
      })
    
  },
});

export default WeeklySlice.reducer;
