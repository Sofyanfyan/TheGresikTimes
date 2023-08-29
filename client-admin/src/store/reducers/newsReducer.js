import { FETCH_NEWS_SUCCESS } from '../action/actionType';

const initialState = { news: []};

function newsReducer(state = initialState, action){
   
   switch (action.type){
      case FETCH_NEWS_SUCCESS:
         return{
            ...state, 
            news: action.payload
         };
         default:
            return state;
   }
}




export default newsReducer