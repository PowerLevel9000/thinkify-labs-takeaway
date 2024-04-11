import { configureStore } from '@reduxjs/toolkit';
import { colorApi } from '../features/api/colors';

export const store = configureStore({
  reducer: {
    [colorApi.reducerPath]: colorApi.reducer,
  },

  // middleware: for caching, error handling, etc.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(colorApi.middleware),
});
