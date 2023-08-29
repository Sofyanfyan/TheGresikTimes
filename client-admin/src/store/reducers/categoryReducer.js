import { FETCH_CATEGORY_SUCCESS } from "../action/actionType";

const initialState = { category: [] }

function categoryReducer(state = initialState, action){

   switch(action.type){

      case FETCH_CATEGORY_SUCCESS:
         return {
            ...state,
            category: action.payload
         }
      default:
         return state;
   }
}


export default categoryReducer