import {createApi,fetchBaseQuery}  from "@reduxjs/toolkit/query/react"

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY,
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const createRequest = (url) => ({ url,headers:cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews:builder.query({
            query:({newsCategories,count}) => createRequest(`/news/search?q=${newsCategories}&safeSearch=Off&freshness=Day&textFormat=Raw&limit=${count}`)
            
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;




