import { FETCH_NEWS_USER_SUCCESS } from "./actionUserType";
import { FETCH_DETAIL_NEWS_SUCCESS } from "./actionUserType";
// const baseUrl = "http://localhost:3001"
const baseUrl = "https://challenge1.the-gresik-times.site"

export const fetchNewsUserSuccess = (payload) => {
   return {
      type: FETCH_NEWS_USER_SUCCESS,
      payload
   }
}


export const fetchNewsUser = () => {
   
   return (dispatch) => {
      fetch( baseUrl + '/pub/news',
      { 
         headers: {
            'Content-Type': 'application/json'
         }
      })
      .then((res) => {
         return res.json()
      })
      .then((data)=> {

         dispatch(fetchNewsUserSuccess(data))
      })
   }
}

export const fetchDetailNewsSuccess = (payload) => {
   return {
      type: FETCH_DETAIL_NEWS_SUCCESS, 
      payload
   }
}


export const fetchDetailNews = (id) => {
   
   console.log('KETRIGGER');

   return(dispatch) => {
      fetch( baseUrl + '/pub/news/' + id,
      { 
         headers: {
            'Content-Type': 'application/json'
         }
      })
      .then(res => {
         return res.json()
      })
      .then((data) => {
         dispatch(fetchDetailNewsSuccess(data))
      })
   }
}