import { combineReducers } from "redux";
import newsUserReducer from "./newsUserReducer";
import newsDetailReducer from "./detailUserReducer";

const rootUserReducer = combineReducers({
   news: newsUserReducer,
   detail: newsDetailReducer
})

export default rootUserReducer