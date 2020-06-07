import * as types from "constants/BasketActionTypes"

export const removeProduct = id => {
  return {
    type: types.REMOVE_PRODUCT,
    payload: { id }
  }
}

export const incrementQuantity = id => {
  return {
    type: types.INCREMENT_QUANTITY,
    payload: { id }
  }
}

export const decrementQuantity = id => {
  return {
    type: types.DECREMENT_QUANTITY,
    payload: { id }
  }
}

export const setQuantity = ({ id, amount}) => {
  return {
    type: types.SET_QUANTITY,
    payload: { id, amount }
  }
}

export const clearBasket = () => {
  return {
    type: types.CLEAR_BASKET
  }
}
