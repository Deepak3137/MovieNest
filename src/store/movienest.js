import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData : [],
  imageURL : ''
}

export const movienest = createSlice({
  name : 'movieNest',
  initialState,
  reducers : {
    setBannerData : (state, action) => {
      state.bannerData = action.payload;
    },
    setImageURL : (state, action) => {
      state.imageURL = action.payload;
    }
  }
});

export const {setBannerData, setImageURL} = movienest.actions;

export default movienest.reducer;
