import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import storage from '../libs/TaroStorage';
import otherStore from "./otherStore";

const reducers = combineReducers({
  other: otherStore,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['other'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type IRootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export default store;
