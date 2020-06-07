import * as actions from "actions/BasketActions"
import * as types from "constants/BasketActionTypes"
import expect from "expect"

describe("Basket actions", () => {
  it("should create an action to remove product from basket", () => {
    const expectedAction = {
      type: types.REMOVE_PRODUCT,
      payload: {
        id: 1,
      },
    }
    expect(actions.removeProduct(1)).toEqual(expectedAction)
  })

  it("should create an action to increment product quantity", () => {
    const expectedAction = {
      type: types.INCREMENT_QUANTITY,
      payload: {
        id: 1,
      },
    }
    expect(actions.incrementQuantity(1)).toEqual(expectedAction)
  })

  it("should create an action to decrement product quantity", () => {
    const expectedAction = {
      type: types.DECREMENT_QUANTITY,
      payload: {
        id: 1,
      },
    }
    expect(actions.decrementQuantity(1)).toEqual(expectedAction)
  })

  it("should create an action to clear all products from basket", () => {
    const expectedAction = {
      type: types.CLEAR_BASKET
    }
    expect(actions.clearBasket()).toEqual(expectedAction)
  })

  it("should create an action to set basket items quantity", () => {
    const expectedAction = {
      type: types.SET_QUANTITY,
      payload: {
        id: 1,
        amount: 2
      }
    }
    expect(actions.setQuantity({id: 1, amount: 2})).toEqual(expectedAction)
  })
})
