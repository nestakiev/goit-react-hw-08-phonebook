import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsAPI";
import { authSlice } from "./authSlice";
import { filterSlice } from "./filterSlice";
import { modalSlice } from "./modalSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
}

const persistedAuthReducer = persistReducer(
    persistConfig,
    authSlice.reducer
);

export const store = configureStore({
    reducer:{
        contacts: contactsApi.reducer,
        filter: filterSlice.reducer,
        modal: modalSlice.reducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) => 
        [...getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }), contactsApi.middleware],
  });


  export const persistor = persistStore(store);
