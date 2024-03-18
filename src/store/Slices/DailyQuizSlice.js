import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  Add_Questions,
  FetchAllUsers,
  Get_Weekly_Performance_of_Student_All,
  fetch_All_Daily_Quiz_Questions,
  Update_Question_Data,
  Get_Question_Data,
  Delete_Daily_Quiz_Question,
} from "../Actions/DailyQuizActions";

let initialState = {
  loading: false,
  Questions: [],
  AllUsers: [],
  All_Daily_Quiz_Questions: [],
  Current_Question: [],
  WrongQuestions: [],
};

const DailyQuizSlice = createSlice({
  name: "DailyQuiz",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Get_Weekly_Performance_of_Student_All.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        Get_Weekly_Performance_of_Student_All.fulfilled,
        (state, action) => {
          if (action.payload && action.payload.data) {
            try {
              let data = [];
              action.payload.data.weeklyQuiz.forEach((question) => {
                data.push(...question.QuestionsWrong);
              });
              return {
                ...state,
                WrongQuestions: [...data],
                loading: false,
              };
            } catch (error) {
              toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
              });
              return state; // Return current state in case of error
            }
          } else {
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
            });
            return state; // Return current state if payload is invalid
          }
        }
      )
      .addCase(Get_Weekly_Performance_of_Student_All.rejected, (state) => {
        state.loading = false;
      })
      // .addCase(fetchQuestions.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(fetchQuestions.fulfilled, (state, action) => {
      //   if (action.payload && action.payload.data) {
      //     // console.log(action.payload);
      //     state.Questions = action.payload.data;
      //     state.loading = false;
      //   } else {
      //     toast.error(action.payload, {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //     });
      //   }
      // })
      // .addCase(fetchQuestions.rejected, (state) => {
      //   state.loading = false;
      // })
      // .addCase(Fetch_Daily_Quiz_Data.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(Fetch_Daily_Quiz_Data.fulfilled, (state, action) => {
      //   if (action.payload && action.payload.data) {
      //     state.loading = false;
      //   } else {
      //     toast.error(action.payload, {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //     });
      //   }
      // })
      // .addCase(Fetch_Daily_Quiz_Data.rejected, (state) => {
      //   state.loading = false;
      // })
      .addCase(FetchAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchAllUsers.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.AllUsers = action.payload.data;
          state.loading = false;
        } else {
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        }
      })
      .addCase(FetchAllUsers.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetch_All_Daily_Quiz_Questions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetch_All_Daily_Quiz_Questions.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.All_Daily_Quiz_Questions = action.payload.data;
          state.loading = false;
        } else {
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        }
      })
      .addCase(fetch_All_Daily_Quiz_Questions.rejected, (state) => {
        state.loading = false;
      })
      .addCase(Add_Questions.pending, (state) => {
        state.loading = true;
      })
      .addCase(Add_Questions.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.All_Daily_Quiz_Questions.push(action.payload.data);
          state.loading = false;
        } else {
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        }
      })
      .addCase(Add_Questions.rejected, (state) => {
        state.loading = false;
      })
      .addCase(Delete_Daily_Quiz_Question.pending, (state) => {
        state.loading = true;
      })
      .addCase(Delete_Daily_Quiz_Question.fulfilled, (state, action) => {
        // console.log(action.payload)
        if (action.payload && action.payload.data) {
          state.All_Daily_Quiz_Questions =
            state.All_Daily_Quiz_Questions.filter(
              (Question) =>
                Question._id !== action.payload.data.deletedQuestion._id
            );
          state.loading = false;
        } else {
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        }
      })
      .addCase(Delete_Daily_Quiz_Question.rejected, (state) => {
        state.loading = false;
      })
      .addCase(Get_Question_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_Question_Data.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.Current_Question = action.payload.data.question;
          state.loading = false;
        } else {
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        }
      })
      .addCase(Get_Question_Data.rejected, (state) => {
        state.loading = false;
      })
      .addCase(Update_Question_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Update_Question_Data.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload && action.payload.data) {
          const { QuestionId, updatedQuestion } = action.payload.data;
          // console.log(QuestionId,updatedQuestion)
          const updatedDaily_Quiz_QuestionIndex =
            state.All_Daily_Quiz_Questions.findIndex(
              (Question) => Question._id === QuestionId
            );

          if (updatedDaily_Quiz_QuestionIndex !== -1) {
            const updatedDaily_Quiz_Question = {
              ...state.All_Daily_Quiz_Questions[
                updatedDaily_Quiz_QuestionIndex
              ],
              ...updatedQuestion,
            };
            state.All_Daily_Quiz_Questions = [
              ...state.All_Daily_Quiz_Questions.slice(
                0,
                updatedDaily_Quiz_QuestionIndex
              ),
              updatedDaily_Quiz_Question,
              ...state.All_Daily_Quiz_Questions.slice(
                updatedDaily_Quiz_QuestionIndex + 1
              ),
            ];
          }
        } else {
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        }
      })
      .addCase(Update_Question_Data.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default DailyQuizSlice.reducer;
