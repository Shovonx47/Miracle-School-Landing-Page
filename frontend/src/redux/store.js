import { configureStore } from '@reduxjs/toolkit';
import missionVisionReducer from './features/missionVisionSlice';

export const store = configureStore({
  reducer: {
    missionVision: missionVisionReducer,
  },
}); 