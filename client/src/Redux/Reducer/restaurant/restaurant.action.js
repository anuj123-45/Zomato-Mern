import axios from 'axios';

// redux types
import { GET_RESTAURANT ,GET_SPECIFIC_RESTAURANT} from './restaurant.type';

export const getRestaurant=()=>async(dispatch)=>{
   try {
    const restaurantList=await axios({
        method: 'GET',
        url: 'http://localhost:5000/restaurant?city=Banglore',
    });

    return dispatch({type: GET_RESTAURANT, payload: restaurantList.data});

   } catch (error) {
    return dispatch({type: "Error", payload: error});

   }
}

export const getSpecificRestaurant=(_id)=>async(dispatch)=>{
    try {
     const restaurant=await axios({
         method: 'GET',
         url: `http://localhost:5000/restaurant/${_id}`,
     });
 
     return dispatch({type: GET_SPECIFIC_RESTAURANT, payload: restaurant.data});
 
    } catch (error) {
     return dispatch({type: "Error", payload: error});
 
    }
 }
 