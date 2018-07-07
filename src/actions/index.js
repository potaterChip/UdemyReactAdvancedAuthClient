import axios from 'axios';
import {AUTH_ERROR, AUTH_USER} from "./types";

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signup', formProps);
        localStorage.setItem('token', response.data.token);
        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        });
        callback();
    } catch(e) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Error signing up'
        });
    }
};

export const signIn = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signin', formProps);
        localStorage.setItem('token', response.data.token);
        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        });
        callback();
    } catch(e) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Invalid credentials'
        });
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
};