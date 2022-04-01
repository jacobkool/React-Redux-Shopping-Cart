import { INCREASE_QUANTITY, DECREASE_QUANTITY} from './types'

export const productQuantity = (action, name) => {
    return(dispatch) => {
        console.log('inside product quantity');
        console.log("action is", action)
        console.log("product is", name)

        dispatch({
            type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }
}