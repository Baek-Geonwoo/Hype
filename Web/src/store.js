import { configureStore, createSlice } from "@reduxjs/toolkit";

//state example
let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },

  //setState function example
  reducers: {
    changeName(state) {
      state.name = "park";
    },
  },
});

//state example
let cartdata = createSlice({
  name: "cartdata",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export let { changeName } = user.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cartdata: cartdata.reducer,
  },
});
