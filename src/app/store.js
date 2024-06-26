import { configureStore } from '@reduxjs/toolkit';
import { colorApi } from '../features/api/colors';
import titleReducer from '../features/creative-title/titleSlice';

// maintaining all state that should be shared across the app
// and all the reducers that should be used to update that state
// including the API slice reducer
const store = configureStore({
  reducer: {
    [colorApi.reducerPath]: colorApi.reducer,
    title: titleReducer,
  },

  // middleware: for caching, error handling, etc.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(colorApi.middleware),
});

export default store;
