import { FETCH_DETAIL_NEWS_SUCCESS } from "../action/actionUserType";

const initialState = {news: []}

function newsDetailReducer(state= initialState, action){


   switch(action.type){
      case FETCH_DETAIL_NEWS_SUCCESS:
      return {

         ...state, 
            detail: action.payload
      };
      default:
         return state   
   }

}


export default newsDetailReducer