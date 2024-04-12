import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  titleCount: 0,
  isDrawerOpen: false,
  titles: [],
  filteredTitles: [],
};

const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    // here i am using direct mutation of the state object
    // this is allowed because of immer library
    // this is a library that allows us to write code that looks like mutating the state
    // but it is actually creating a new state object under the hood and returning it.
    // this is the power of RTK and immer
    // however, it is not recommended to use direct mutation of the state object in the reducers
    // so i am commenting this out and using the other way of updating the state object
    // addTitle: (state, { payload }) => {
    //     state.titles.push(payload)
    //     state.titleCount++
    // },
    addTitles: (state, { payload }) => {
      const newState = {
        titleCount: state.titleCount + 1,
        titles: [...state.titles, payload],
      };
      return newState;
    },

    filteredTitles: (state, { payload }) => {
      const newState = {
        ...state,
        filteredTitles: payload,
      };
      return newState;
    },

    drawerOpen: (state) => ({
      ...state,
      isDrawerOpen: true,
    }),

    drawerClose: (state) => ({
      ...state,
      isDrawerOpen: false,
    }),
  },
});

export const {
  addTitles, drawerClose, drawerOpen, filteredTitles,
} = titleSlice.actions;
export default titleSlice.reducer;
