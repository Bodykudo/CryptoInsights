import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Host': import.meta.env.VITE_COINRANKING_RAPIDAPI_HOST,
  'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_API_KEY,
};

const createRquest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_COINRANKING_API_URL,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count = null) =>
        createRquest(count ? `/coins?limit=${count}` : `/coins`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRquest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRquest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
