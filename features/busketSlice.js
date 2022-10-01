import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
export const busketSlice = createSlice({
  name: 'busket',
  initialState,
  reducers: {
    addToBusket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBusket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBusket = [...state.items];
      if (index >= 0) {
        newBusket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in busket!`
        );
      }
      state.items = newBusket;
    },
  },
});

export const { addToBusket, removeFromBusket } = busketSlice.actions;
export const selectBusketItems = (state) => state.busket.items;
export const selectBusketWithId = (state, id) =>
  state.busket.items.filter((item) => item.id === id);
export const selectBusketTotal = (state) =>
  state.busket.items.reduce((total, item) => total + item.price, 0);

export default busketSlice.reducer;
