import axios from "axios";
import setAuthToken from "../token/setAuthToken";
import jwt_decode from "jwt-decode";

import {
    GET_ERRORS,
    LOGIN,
    LOGIN_ERROR,
    SIGN_UP_ERROR,
    SIGN_OUT,
    RESET_LOGIN_STATUS,
    RESET_SIGNUP_STATUS,
    VERIFICATION,
    RESET_VERIFICATION,
} from "./types";

import { BASIC_URL } from '../config/config';

export const reset_login_status = () => dispatch => {
    dispatch({
        type: RESET_LOGIN_STATUS,
        payload: ""
    })
}

export const reset_signup_status = () => dispatch => {
    dispatch({
        type: RESET_SIGNUP_STATUS,
        payload: ""
    })
}

export const loginError = (szErr) => dispatch => {
    dispatch({
        type: LOGIN_ERROR,
        payload: szErr
    })
}

export const signupError = (szErr) => dispatch => {
    dispatch({
        type: SIGN_UP_ERROR,
        payload: szErr
    })
}

export const verificationUser = (userData) => dispatch => {
    axios
        .post(BASIC_URL + "/users/verify", userData)
        .then(res => {
            if(res.data.success === true) {

                dispatch({
                    type: VERIFICATION,
                    payload: res.data.code,
                    payload2: userData      //User temp info(unverified)
                })

                window.location = "/verification";
            } else {
                dispatch({
                    type: SIGN_UP_ERROR,
                    payload: res.data.errMessage
                })                
            }
        })
        .catch(err => console.log(err));
}

//Register User
export const signupUser = (userData, history) => dispatch => {
    axios
        .post(BASIC_URL + "/users/signup", userData)
        .then(res => {
            if(res.data.success === true) {

                dispatch(setCurrentUser(res));
                
            } else {
                dispatch({
                    type: SIGN_UP_ERROR,
                    payload: res.data.errMessage
                })
            }
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: "payload"
            })
        );
};

export const loginUser = userData => dispatch => {
    
    axios.post(BASIC_URL + "/users/login", userData)
        .then(res => {

            if( res.data.success === true ) {

                dispatch(setCurrentUser(res));

            } else {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: res.data.loginResult
                })    
            }

        })
        .catch(err =>{
            dispatch({
                type: LOGIN_ERROR,
                payload: err.response.data.loginResult
            })

        }
        );
}


export const googleLogin = userData => dispatch => {
    
    axios.post(BASIC_URL + "/users/googleLogin", userData)
        .then(res => {

            if( res.data.success === true ) {

                dispatch(setCurrentUser(res));

            } else {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: res.data.loginResult
                })    
            }

        })
        .catch(err =>{
            console.log(err);
            // dispatch({
            //     type: LOGIN_ERROR,
            //     payload: err.response.data
            // })

        }
        );
}

export const facebookLogin = userData => dispatch => {
    
    axios.post(BASIC_URL + "/users/facebookLogin", userData)
        .then(res => {

            if( res.data.success === true ) {

                dispatch(setCurrentUser(res));

            } else {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: res.data.loginResult
                })    
            }

        })
        .catch(err =>{
            console.log(err);
            // dispatch({
            //     type: LOGIN_ERROR,
            //     payload: err.response.data
            // })

        }
        );
}

export const setCurrentUser = (res) => dispatch => {
    //Save to localStorage

    //Set token to localStorage
    const {token} = res.data;
    localStorage.setItem("jwtToken", token);
    // Set token to Auth header
    setAuthToken(token);
    //Decode token to get user data
    const decoded = jwt_decode(token);

    dispatch({
        type: LOGIN,
        payload: decoded
    })
    let authority = decoded.authority;

    if(authority === 0) {
        window.location = "/admin";
    } else if(authority === 2) {
        window.location = "/home";
    }

}

//Sign out
export const signout = () => dispatch => {
    
    //Remove token from local storage
    localStorage.removeItem("jwtToken");
    //Remove auth header for future requests
    setAuthToken(false);
    
    dispatch({
        type: SIGN_OUT,
        payload: "signout"
    })

    window.location = "/";
    //Set current user to empty object {} which will set isAuthenticated to false
    // dispatch(setCurrentUser({}));
};
