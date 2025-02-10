import { legacy_createStore as createStore ,applyMiddleware} from 'redux';
import rootReducer from './Reducer/rootReducer';
import {thunk} from 'redux-thunk'
import {logger} from 'redux-logger'

// redux middleware
const middlewares=[thunk];
// if we are in development mode then only we will use redux-logger
if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}
    


const store=createStore(rootReducer,{},applyMiddleware(...middlewares));
export default store;