import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleware = [logger];
// // const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
// //   Boolean
// );

const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnhancers);
