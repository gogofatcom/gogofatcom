import { createSlice } from "@reduxjs/toolkit";

  const Inatial_state={
    wishlist:[],
    quantity:0
  }
 const movieSlice =  createSlice({
    name:"movies",
    initialState:Inatial_state,
    reducers: {

      addToWishlist: (state, action) => {
       
          state.wishlist.push({ ...action.payload});
        
      },
     
      removeFromWishlist: (state, action) => {
        const removeItem = state.movies.filter((item) => item.id !== action.payload);
        state.wishlist = removeItem;
        state.wishlist.push({ ...action.payload, quantity: -1 });
      },

  }
})

export const { addToWishlist,removeFromWishlist }=movieSlice.actions;

export const cartReducer= movieSlice.reducer;