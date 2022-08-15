
import { createStore, combineReducers } from "redux";

import reducer1 from "./reducers";
import reducer2 from "./reducer2";

// const store=createStore( reducer1);

const store =createStore(combineReducers({reducer1, reducer2 }))

export default store;