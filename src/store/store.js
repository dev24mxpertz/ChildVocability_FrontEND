import { configureStore } from "@reduxjs/toolkit";
import storySlice from "./Slices/storySlice";
import adminSlice from "./Slices/adminSlice";
import authSlice from "./Slices/authSlice";
import DailyQuizSlice from "./Slices/DailyQuizSlice";
import WeeklySlice from "./Slices/WeeklySlice";


export const store = configureStore({
  reducer: {
    Story: storySlice,
    Admin: adminSlice,
    auth : authSlice,
    DailyQuiz:DailyQuizSlice,
    WeeklyQuiz:WeeklySlice,
  },
});
 