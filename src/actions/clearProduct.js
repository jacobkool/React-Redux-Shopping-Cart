import {CLEAR_PRODUCT} from './types'

export const clearProduct = (name) => {
    return (dispatch) => {
        console.log(CLEAR_PRODUCT)
        console.log('product name', name)
        dispatch({
            type: CLEAR_PRODUCT,
            payload: name
        })
    }
}