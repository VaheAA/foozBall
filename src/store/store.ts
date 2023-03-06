import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../services/baseApi';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer
});


export const setupStore = () => {
  return configureStore({ reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware) });
};
