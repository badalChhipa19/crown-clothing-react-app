// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

const middleware = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);
// // const middleware = [logger];

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleware));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);
