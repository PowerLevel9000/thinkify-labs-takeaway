import { configureStore } from '@reduxjs/toolkit';
import { colorApi } from '../features/api/colors';
import titleReducer from '../features/creative-title/titleSlice';

const store = configureStore({
  reducer: {
    [colorApi.reducerPath]: colorApi.reducer,
    title: titleReducer,
  },

  // middleware: for caching, error handling, etc.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(colorApi.middleware),
});

export default store;
