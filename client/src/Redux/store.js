import { legacy_createStore as createStore ,applyMiddleware} from 'redux';
import rootReducer from './Reducer/rootReducer';
import thunk from 'redux-thunk';

// redux middleware
const middlewares=[thunk];
// if we are in development mode then only we will use redux-logger
if(process.env.NODE_ENV==='development'){
    const {logger}=require('redux-logger');
    middlewares.push(logger);
}
    


const store=createStore(rootReducer,{},applyMiddleware(...middlewares));
export default store;