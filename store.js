import { configureStore } from '@reduxjs/toolkit';
import busketReducer from './features/busketSlice';
import restaurantReducer from './features/restaurantSlice';
export default configureStore({
  reducer: {
    busket: busketReducer,
    restaurant: restaurantReducer,
  },
});
