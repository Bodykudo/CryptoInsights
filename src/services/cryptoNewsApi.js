import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_API_KEY,
  'x-rapidapi-host': import.meta.env.VITE_NEWS_RAPIDAPI_HOST,
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_NEWS_API_URL,
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
