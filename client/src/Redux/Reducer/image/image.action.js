import axios from 'axios';

// redux types
import { GET_IMAGE } from './image.type';

export const getImage = (_id) => async (dispatch) => {
    try {
        const Image = await axios({
            method: 'GET',
            url: `http://localhost:5000/image/${_id}`,
        });

        return dispatch({ type: GET_IMAGE, payload: Image.data });

    } catch (error) {
        return dispatch({ type: "Error", payload: error });

    }
}
