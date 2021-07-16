import { createStore, applyMiddleware, compose } from "redux";
import reducers from './reducers/index';

import thunk from "redux-thunk";

// const middleware = [thunk];
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
    // compose(
    //     applyMiddleware(...middleware),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //   )
)