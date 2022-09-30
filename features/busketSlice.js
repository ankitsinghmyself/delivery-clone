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
        (busketItem) => busketItem.id === action.payload.id
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

export const { addToBusket } = busketSlice.actions;

export const selectBusketWithId = (state, id) =>
  state.busket.items.filter((item) => item.id === id);

export default busketSlice.reducer;
