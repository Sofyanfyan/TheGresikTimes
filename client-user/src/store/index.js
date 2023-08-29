import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import rootUserReducer from './reducers/rootUserReducer';

import thunk from 'redux-thunk'

let store = createStore(rootUserReducer, applyMiddleware(thunk));


export default store