import {
    LOGIN,
    LOGIN_ERROR,
    GET_ERRORS,
    SIGN_UP_ERROR,
    SIGN_OUT,
    RESET_LOGIN_STATUS,
    RESET_SIGNUP_STATUS,
    VERIFICATION,
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    currentUser: {},
    unverifiedUser: {},
    loginStatus: "",
    signupStatus: "",
    verificationStatus: "",
    verificationCode: "",
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case RESET_LOGIN_STATUS:
            return {
                ...state,
                loginStatus: "",
            }

        case RESET_SIGNUP_STATUS:
            return {
                ...state,
                signupStatus: ""
            }

        case LOGIN_ERROR:
            return {
                ...state,
                loginStatus: action.payload
            };
            
        case LOGIN:
            return {
                ...state,
                currentUser: action.payload,
                isAuthenticated: !isEmpty(action.payload)
            };

        case SIGN_UP_ERROR:
            return {
                ...state,
                signupStatus: action.payload
            }

        case VERIFICATION:
            return {
                ...state,
                verificationStatus: "",
                verificationCode: action.payload,
                unverifiedUser: action.payload2,
            }
            

        case SIGN_OUT:
            return {
                ...state,
                loginStatus: "",
                signupStatus: "",
                currentUser: {},
                isAuthenticated: false,
                unverifiedUser: {},
                verificationStatus: "",
                verificationCode: "",
                loading: false            
            };

        case GET_ERRORS:
            return {
                ...state,
            };

        default:
            return state;
    }
}