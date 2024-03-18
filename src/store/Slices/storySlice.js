import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { fetchAdventureDataByID, 
         fetchAllAdventure,
         fetchAllFantary,
         fetchAllHistory,
         fetchAllSport,
         fetchAllmystery, 
         fetchAllscience, 
         fetchFantasyDataByID, 
         fetchHistoryDataByID, 
         fetchMysteryDataByID, 
         fetchScienceDataByID, 
         fetchSportDataByID,
         fetchInProgressscience,
         fetchCompletedScience,
         fetchNewscience,
         fetchNewAdventure,
         fetchInProgressAdventure,
         fetchCompletedAdventure,
         fetchNewFantasy,
         fetchInProgressFantasy,
         fetchCompletedFantasy,
         fetchCompletedMystery,
         fetchInProgressMystery,
         fetchNewMystery,
         fetchCompletedHistoryfiction,
         fetchInProgressHistoryfiction,
         fetchNewHistoryfiction,
         fetchCompletedSportfiction,
         fetchNewSportfiction,
         fetchInProgressSportfiction} from "../Actions/storyActions"

let intialState = {
  AllFantary:[],
  AllAdventure:[],
  Allscience:[],
  AllHistory:[],
  AllSport:[],
  Allmystery:[],
  DetailData:[],
  loading:false
};

const StorySlice = createSlice({
  name: "Story",
  initialState: intialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFantary.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllFantary.fulfilled, (state, action) => {
        state.AllFantary = action.payload
        state.loading = false;
      })
      .addCase(fetchAllFantary.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchAllAdventure.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllAdventure.fulfilled, (state, action) => {
        state.AllAdventure = action.payload
        state.loading = false;
      })
      .addCase(fetchAllAdventure.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchAllscience.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllscience.fulfilled, (state, action) => {
        state.Allscience = action.payload
        state.loading = false;
      })
      .addCase(fetchAllscience.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchAllHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllHistory.fulfilled, (state, action) => {
        state.AllHistory = action.payload
        state.loading = false;
      })
      .addCase(fetchAllHistory.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchAllSport.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllSport.fulfilled, (state, action) => {
        state.AllSport = action.payload
        state.loading = false;
      })
      .addCase(fetchAllSport.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchAllmystery.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllmystery.fulfilled, (state, action) => {
        state.Allmystery = action.payload
        state.loading = false;
      })
      .addCase(fetchAllmystery.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchAdventureDataByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdventureDataByID.fulfilled, (state, action) => {
        state.DetailData = action.payload
        state.loading = false;
      })
      .addCase(fetchAdventureDataByID.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchFantasyDataByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFantasyDataByID.fulfilled, (state, action) => {
        state.DetailData = action.payload
        state.loading = false;
      })
      .addCase(fetchFantasyDataByID.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchHistoryDataByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHistoryDataByID.fulfilled, (state, action) => {
        state.DetailData = action.payload
        state.loading = false;
      })
      .addCase(fetchHistoryDataByID.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMysteryDataByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMysteryDataByID.fulfilled, (state, action) => {
        state.DetailData = action.payload
        state.loading = false;
      })
      .addCase(fetchMysteryDataByID.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchScienceDataByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchScienceDataByID.fulfilled, (state, action) => {
        state.DetailData = action.payload
        state.loading = false;
      })
      .addCase(fetchScienceDataByID.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchSportDataByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSportDataByID.fulfilled, (state, action) => {
        state.DetailData = action.payload
        state.loading = false;
      })
      .addCase(fetchSportDataByID.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchCompletedScience.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompletedScience.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
        state.Allscience = action.payload.data
        state.loading = false;
        } else{
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false
          });
        }
      })
      .addCase(fetchCompletedScience.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchInProgressscience.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInProgressscience.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.Allscience = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchInProgressscience.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchNewscience.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewscience.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.Allscience = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchNewscience.rejected, (state) => {
        state.loading = false;
      })      
      .addCase(fetchCompletedAdventure.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompletedAdventure.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
        state.AllAdventure = action.payload.data
        state.loading = false;
        } else{
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false
          });
        }
      })
      .addCase(fetchCompletedAdventure.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchInProgressAdventure.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInProgressAdventure.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.AllAdventure = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchInProgressAdventure.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchNewAdventure.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewAdventure.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.AllAdventure = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchNewAdventure.rejected, (state) => {
        state.loading = false;
      })  
       .addCase(fetchCompletedFantasy.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompletedFantasy.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
        state.AllFantary = action.payload.data
        state.loading = false;
        } else{
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false
          });
        }
      })
      .addCase(fetchCompletedFantasy.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchInProgressFantasy.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInProgressFantasy.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.AllFantary = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchInProgressFantasy.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchNewFantasy.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewFantasy.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.AllFantary = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchNewFantasy.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchCompletedMystery.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompletedMystery.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
        state.Allmystery = action.payload.data
        state.loading = false;
        } else{
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false
          });
        }
      })
      .addCase(fetchCompletedMystery.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchInProgressMystery.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInProgressMystery.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.Allmystery = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchInProgressMystery.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchNewMystery.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewMystery.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.Allmystery = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchNewMystery.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchCompletedHistoryfiction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompletedHistoryfiction.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
        state.AllHistory = action.payload.data
        state.loading = false;
        } else{
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false
          });
        }
      })
      .addCase(fetchCompletedHistoryfiction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchInProgressHistoryfiction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInProgressHistoryfiction.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.AllHistory = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchInProgressHistoryfiction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchNewHistoryfiction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewHistoryfiction.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.AllHistory = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchNewHistoryfiction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchCompletedSportfiction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompletedSportfiction.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
        state.AllSport = action.payload.data
        state.loading = false;
        } else{
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false
          });
        }
      })
      .addCase(fetchCompletedSportfiction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchInProgressSportfiction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInProgressSportfiction.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.AllSport = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchInProgressSportfiction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchNewSportfiction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewSportfiction.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.AllSport = action.payload.data
          state.loading = false;
          } else{
            toast.error(action.payload, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false
            });
          }
      })
      .addCase(fetchNewSportfiction.rejected, (state) => {
        state.loading = false;
      })
    // Add other cases if needed
    
  },
});

// export const { } = FantarySlice.actions;
export default StorySlice.reducer;
