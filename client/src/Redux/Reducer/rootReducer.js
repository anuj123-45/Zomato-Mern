import {combineReducers} from 'redux';

import restaurantReducer from './restaurant/restaurant.reducer';
import imageReducer from './image/image.reducer';

const rootReducer = combineReducers({restaurantReducer,imageReducer})

export default rootReducer;