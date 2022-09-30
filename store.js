import { configureStore } from '@reduxjs/toolkit';
import busketReducer from './features/busketSlice';
export default configureStore({
  reducer: {
    busket: busketReducer,
  },
});
