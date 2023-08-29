import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
   news: newsReducer,
   category: categoryReducer
})


export default rootReducer