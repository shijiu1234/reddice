import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt_decode from 'jwt-decode';

import {SET_CURRENT_USER} from './actionTypes';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function login(data) {
    return dispatch => {
        return axios.post('/api/auth', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt_decode(token)));
        })
    }
}

export function logout(){
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}