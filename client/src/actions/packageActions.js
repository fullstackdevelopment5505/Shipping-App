import axios from 'axios';
import { BASIC_URL } from '../config/config';

export const newOrder = (order) => dispatch => {
    axios.post(BASIC_URL + "/packages/submitNewOrder", order)
        .then(res => {
            if(res.data.success === true) {
                console.log(res.data.result);
            } else {
                console.log("Submit new order is canceled.")
            }
        })
        .catch(err => {
            console.log(err);
        })
}