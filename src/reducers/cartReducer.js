import { ADD_PRODUCT_TO_CART, CLEAR_PRODUCT, DECREASE_QUANTITY, GET_CART_NUMBERS, INCREASE_QUANTITY } from "../actions/types"
import {surfboardimg, wetsuitimg, waximg, hoodieimg} from '../images/StoreImages'

const initialState = {
    cartNumber: 0,
    cartCost: 0,
    products : {
        surfboard : {
            name: 'Surfboard',
            price: 300,
            number: 0,
            inCart: false,
            img: surfboardimg,
            tagName: 'surfboard'
        },
        wetsuit : {
            name: 'Wetsuit',
            price: 150,
            number: 0,
            inCart: false,
            img: wetsuitimg,
            tagName: 'wetsuit'
        },
        surfwax : {
            name: 'Surf Wax',
            price: 15,
            number: 0,
            inCart: false,
            img: waximg,
            tagName: 'surfwax'
        },
        hoodie : {
            name: 'Hoodie',
            price: 45,
            number: 0,
            inCart: false,
            img: hoodieimg,
            tagName: 'hoodie'
        }
    }
}

export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_TO_CART:
            productSelected = {...state.products[action.payload]}
            productSelected.number += 1;
            productSelected.inCart = true;
            console.log(productSelected)

            return {
                ...state,
                cartNumber: state.cartNumber + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_CART_NUMBERS:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected = {...state.products[action.payload]};
            productSelected.number += 1;
            return {
                ...state,
                cartNumber: state.cartNumber + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = {...state.products[action.payload]};
            let newCartCost = 0;
            if (productSelected.number === 0) {
                productSelected.number = 0
                newCartCost = state.cartCost
            } else {
                productSelected.number -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
            }
            let newCartNumber = 0;
            if (state.cartNumber < 1) {
                newCartNumber = 0
            } else {
                newCartNumber = state.cartNumber -1
            }
            return {
                ...state,
                cartNumber: newCartNumber,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case CLEAR_PRODUCT:
            productSelected = {...state.products[action.payload]};
            let numberBackup = productSelected.number
            productSelected.number = 0;
            productSelected.inCart = false;
            return {
                ...state,
                cartCost: state.cartCost - (numberBackup * productSelected.price),
                cartNumber: state.cartNumber - numberBackup,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        default:
            return state
    }
}