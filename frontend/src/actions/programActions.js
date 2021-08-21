import axios from "axios";
import {
    GET_ALL_PROGRAM_REQUEST, GET_ALL_PROGRAM_SUCCESS, GET_ALL_PROGRAM_FAIL,
    GET_ONE_PROGRAM_REQUEST, GET_ONE_PROGRAM_SUCCESS, GET_ONE_PROGRAM_FAIL
} from './../constants/programConstants';

export const getAllProgram = () => async (dispatch) => {
    dispatch({ type: GET_ALL_PROGRAM_REQUEST });
    try {
        const { data } = await axios.get('/api/fitnessvideo');
        dispatch({ type: GET_ALL_PROGRAM_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ALL_PROGRAM_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
};

export const getOneProgram = (programId) => async (dispatch) => {
    dispatch({ type: GET_ONE_PROGRAM_REQUEST });
    try {
        const { data } = await axios.get(`/api/fitnessvideo/${programId}`);
        console.log(data);
        dispatch({ type: GET_ONE_PROGRAM_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ONE_PROGRAM_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
};
