import { FETCH_CATEGORY_SUCCESS, FETCH_NEWS_SUCCESS } from "./actionType";

const baseUrl = 'https://challenge1.the-gresik-times.site'

// LOGIN REGISTER ========================================

export const loginForm = (value) => {

   return fetch( baseUrl  + '/users/login', {
         method: 'POST', 
         body: JSON.stringify(value),
         headers: {
            'Content-Type': 'application/json'
         }
         })
         .then((res) => {

            console.log(res);

            if(res.ok){
               
               return res.json()
            } else if(res.status === 401){
               
               throw new Error('Invalid Email/Password');
            }
            
            throw new Error('Semething went wrong');
            
         })
         .then(data => {
            localStorage.setItem('access_token', data.access_token)
         })
}

export const registerForm = (value) => {
   
   return fetch( baseUrl  + '/users/register', {
         method: 'POST', 
         body: JSON.stringify(value),
         headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.access_token
         }
         })
         .then((res) => {
            
            if(res.status === 400){
               throw new Error ('Your Email has been registered')
            }
            
            if(!res.ok){
               throw new Error ('Something Wrong!')
            }
         })
}



// NEWS =============================================

export const fetchNewsSuccess = (payload) => {
   return {
      type: FETCH_NEWS_SUCCESS,
      payload
   }
}

export const fetchNews = () => {
   return (dispatch) => {
      fetch(baseUrl + "/news", {
         method: "GET", 
         headers: {
            access_token: localStorage.access_token,
            'Content-Type': 'application/json'
         }
      })
      .then((res) => {
         return res.json()
      })
      .then((data) => {
         dispatch(fetchNewsSuccess(data))
      })
   }
}

// ADD NEWS

export const postNews = (formNews) => {
   return (dispatch) =>{

      fetch(baseUrl + '/news', {
            method: 'post', 
            body: JSON.stringify(formNews),
            headers: {
               'Content-Type': 'application/json',
               access_token: localStorage.access_token
            }
         })
         .then((res) => {
            console.log(res);
            return res.json()
         })
         .then(()=> {
            
            dispatch(fetchNews())
         })
         .catch((err) => console.log("ERROR : ", err))
   } 
   
   
}

// Delete News
export const deleteNews = (id) => {
   return (dispatch) => {
      fetch(baseUrl + `/news/${id}`, {
         method: "DELETE",
         headers:{
            'Content-Type': 'application/json',
            access_token: localStorage.access_token
         }
      })
      .then(() => dispatch(fetchNews()))
      .catch((err) => console.log("ERR : ", err))
   } 
}

// Update News 

export const updateNews = (formNews, id) => {
   return (dispatch) =>{

      fetch(baseUrl + `/news/${id}`, {
            method: 'put', 
            body: JSON.stringify(formNews),
            headers: {
               'Content-Type': 'application/json',
               access_token: localStorage.access_token
            }
         })
         .then((res) => {
            return res.json()
         })
         .then(()=> {
            
            dispatch(fetchNews())
         })
         .catch((err) => console.log("ERROR : ", err))
   } 
}

// CATEGORY ========================================

export const fetchCategorySuccess = (payload) => {
   return {
      type: FETCH_CATEGORY_SUCCESS,
      payload
   }
}

export const fetchCategory = () => {

   return (dispatch) => {

      fetch( baseUrl + "/categories", {
         method: "GET", 
         headers: {
            access_token: localStorage.access_token
         }
      })
      .then((res) => {
         return res.json()
      })
      .then((data) => {
         
         dispatch(fetchCategorySuccess(data))
      })
   }
}

export const createCategory = (value) => {
   return (dispatch) => {
      fetch(baseUrl + '/categories', {
         method: 'POST',
         body: JSON.stringify(value),
         headers:{
            'Content-Type': 'application/json',
            access_token: localStorage.access_token
         }
      })
      .then(res => res.json())
      .then(()=> dispatch(fetchCategory()))
   }
}


export const deleteCategory = (id) => {

   return (dispatch) => {
      fetch(baseUrl + `/categories/${id}`, {
         method: 'DELETE', 
         headers:{
            access_token:localStorage.access_token,
            'Content-Type': 'application/json',
         }
      })
      .then(() => dispatch(fetchCategory()))
   }
}


export const editCategory = (form, id) => {
   return (dispatch) => {
      fetch(baseUrl + `/categories/${id}`,{
         method: "PUT",
         body: JSON.stringify(form),
         headers:{
            access_token:localStorage.access_token,
            'Content-Type': 'application/json',
         }
      })
      .then(() => dispatch(fetchCategory()))
   }
}