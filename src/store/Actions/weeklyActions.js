import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helpers/axiosconfig";

export const Create_Weekly_Quiz = createAsyncThunk(
  "weekly/Create_Weekly_Quiz",
  async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post(`weeklyperformances`, formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Get_Weekly_Quiz_By_StudentID = createAsyncThunk(
  "weekly/Get_Weekly_Quiz_By_StudentID",
  async (data) => {
    // console.log(data);
    try {
      const response = await axios.post(
        `Get_Weekly_Performance_of_Student/${data.id}`,
        data
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Update_Weekly_Quiz = createAsyncThunk(
  "weekly/Update_Weekly_Quiz",
  async ({ formData, WeeklyQuizid }) => {
    console.log(formData);
    console.log(WeeklyQuizid);
    try {
      const response = await axios.post(
        `weeklyperformances/${WeeklyQuizid}`,
        formData
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

// export const Update_Weekly_Quiz = createAsyncThunk(
//   "weekly/Update_Weekly_Quiz",
//   async ({ formData, WeeklyQuizid }) => {
//     try {
//       // Fetch existing data to compare with formData
//       const response = await axios.get(`weeklyperformances/${WeeklyQuizid}`);
//       const existingData = response.data;

//       // Check if the formData is unique compared to existing data
//       const isUnique = !existingData.some(item =>
//         // Implement your own logic to determine uniqueness
//         // For example, if both objects are identical, they are not unique
//         JSON.stringify(item) === JSON.stringify(formData)
//       );

//       if (isUnique) {
//         // If the data is unique, proceed with the update
//         const updateResponse = await axios.post(`weeklyperformances/${WeeklyQuizid}`, formData);
//         console.log(updateResponse);
//         return updateResponse;
//       } else {
//         // If the data already exists, return a message indicating that it's not unique
//         console.log("Data already exists and is not unique.");
//         return "Data already exists and is not unique.";
//       }
//     } catch (error) {
//       console.log(error.response.data.message);
//       return error.response.data.message;
//     }
//   }
// );
