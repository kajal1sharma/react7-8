import { createStore , combineReducers} from "redux";
import bookInfo from "./bookInfoReducer";
import cart from "./cartReducer";
const store =createStore(combineReducers({bookInfo, cart}))

export default store