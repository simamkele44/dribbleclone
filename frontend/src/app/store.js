import { configureStore } from '@reduxjs/toolkit';
import positionSlice from '../features/position/positionSlice';
import positionReducer from '../features/position/positionSlice';

export const store = configureStore({
  reducer: {
    position: positionSlice
  },
});
