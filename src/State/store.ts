import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/reducer';
import analyticsreducer from "./Analytics/reducer"
const store = configureStore({
  reducer: {
    user: userReducer, 
    analytics:analyticsreducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
