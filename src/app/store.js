import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";


// export default configureStore({
//     reducer:{
//         [cryptoApi.reducerPath] :cryptoApi.reducer,
//     },
// });


const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [cryptoApi.reducerPath] :cryptoApi.reducer,
    [cryptoNewsApi.reducerPath] :cryptoNewsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware,cryptoNewsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export default store;
