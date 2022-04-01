import {GET_CART_NUMBERS} from './types'

export const getNumbers = () =>{
    return (dispatch) => {
        console.log('Getting all cart numbers')
        dispatch({
            type: GET_CART_NUMBERS
        })
    }
}