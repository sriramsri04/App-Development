import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer, 
  },
});
