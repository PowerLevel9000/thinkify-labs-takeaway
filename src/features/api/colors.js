import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// why using Redux Toolkit Query? not Simple fetch?
// - RTK Query provides a set of tools to simplify common cases for loading,
// caching, and updating data in a Redux application
// - It also provides a set of hooks that can be used to interact with the API endpoints
// yeah I am using axe to kill a fly, but it's a good axe and I like it :D also
// I want to show my skills with RTK Query
// Apart from this you can check custom hook for fetching data in hooks folder
// in src/hooks/useFetch.js
export const colorApi = createApi({
  reducerPath: 'colorApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://random-flat-colors.vercel.app/api/random' }),
  endpoints: (builder) => ({
    getColor: builder.query({
      query: () => '?count=5',
    }),
  }),
});

export const { useGetColorQuery } = colorApi;
