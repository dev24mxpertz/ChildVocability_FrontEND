import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helpers/axiosconfig";

export const Get_Weekly_Performance_of_Student_All = createAsyncThunk(
  "DailyQuiz/Get_Weekly_Performance_of_Student_All",
  async (id) => {
    console.log(id)
    try {
      const response = await axios.get(
        `Get_Weekly_Performance_of_Student_All/${id}`
      );
      console.log(response);
      return response
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);


// export const fetchQuestions = createAsyncThunk(
//   "auth/fetchQuestions",
//   async () => {
//     try {
//       const response = await axios.get(`Get_Weekly_Performance_of_Student`);
//       // console.log(response);
//       return response;
//     } catch (error) {
//       console.log(error.response.data.message);
//       return error.response.data.message;
//     }
//   }
// );

export const Fetch_Daily_Quiz_Data = createAsyncThunk(
  "auth/Fetch_Daily_Quiz_Data",
  async (formData) => {
    console.log(formData)
    try {
      const response = await axios.post(`Create_Progress`, formData);
      console.log(response);
      return response;
    } catch (error) {
      // console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const FetchAllUsers = createAsyncThunk(
  "auth/FetchAllUsers",
  async () => {
    try {
      const response = await axios.get(`FetchAllUsers`);
      // console.log(response);
      return response;
    } catch (error) {
      // console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const fetch_All_Daily_Quiz_Questions = createAsyncThunk(
  "auth/fetch_All_Daily_Quiz_Questions",
  async () => {
    try {
      const response = await axios.get(`weeklyperformances`);
      // console.log(response);
      return response;
    } catch (error) {
      // console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Delete_Daily_Quiz_Question = createAsyncThunk(
  "auth/Delete_Daily_Quiz_Question",
  async (id) => {
    try {
      const response = await axios.get(`questions/${id}`);
      // console.log(response);
      return response;
    } catch (error) {
      // console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Add_Questions = createAsyncThunk(
  "auth/Add_Questions",
  async (formData) => {
    try {
      const response = await axios.post("questions", formData);
      // console.log(response);
      return response;
    } catch (error) {
      // console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Get_Question_Data = createAsyncThunk(
  "auth/Get_Question_Data",
  async (id) => {
    try {
      const response = await axios.get(`question/${id}`);
      // console.log(response);
      return response;
    } catch (error) {
      // console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Update_Question_Data = createAsyncThunk(
  "auth/Update_Question_Data",
  async ({ id, formData }) => {
    try {
      console.log(id, formData);
      const response = await axios.post(`question/${id}`, formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);
