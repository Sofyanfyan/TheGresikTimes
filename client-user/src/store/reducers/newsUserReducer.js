import { FETCH_NEWS_USER_SUCCESS } from "../action/actionUserType";

const initialState = { news: [] }

function newsUserReducer(state = initialState, action){

   switch(action.type){
      case FETCH_NEWS_USER_SUCCESS:
         return{
            ...state,
            news: action.payload
         };
         default:
            return state
   }
}

export default newsUserReducer