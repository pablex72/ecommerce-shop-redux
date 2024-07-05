import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //actions
    add(state, action) {
      //when pass data from UI it will read from action . payload
      // --> that give me the data to update to my state
      //is mutable
      state.push(action.payload);
    },
    // delete(){

    // }
  },
});

//return actions, bcs we have to dispatch from UI
export const {add} = cartSlice.actions
export default cartSlice.reducer;

//slice return : actiones (funcion) and reducer (state)
// slice is a collection of redux reducer logic and actions for a single feature

