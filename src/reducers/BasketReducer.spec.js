import reducer from "./BasketReducer"
import * as types from "constants/BasketActionTypes"
import expect from "expect"

describe("Basket reducer", () => {
  it("should return the intial state", () => {
    expect(reducer(undefined, {})).toEqual({
      productIds: [1, 2, 3],
      quantityById: {
        1: 3,
        2: 2,
        3: 1,
      },
    })
  })

  it("should handle REMOVE_PRODUCT", () => {
    expect(
      reducer(undefined, { 
        type: types.REMOVE_PRODUCT,
        payload: { id: 1 } 
      }),
    ).toEqual({
      productIds: [2, 3],
      quantityById: {
        2: 2,
        3: 1,
      },
    })
  })

  it("should handle INCREMENT_QUANTITY", () => {
    expect(
      reducer(undefined, {
        type: types.INCREMENT_QUANTITY,
        payload: { id: 1 }
      }),
    ).toEqual({
      productIds: [1, 2, 3],
      quantityById: {
        1: 4,
        2: 2,
        3: 1,
      },
    })
  })

  it("should handle DECREMENT_QUANTITY", () => {
    expect(
      reducer(undefined, {
        type: types.DECREMENT_QUANTITY,
        payload: { id: 1 }
      }),
    ).toEqual({
      productIds: [1, 2, 3],
      quantityById: {
        1: 2,
        2: 2,
        3: 1,
      },
    })
  })

  it("should handle SET_QUANTITY", () => {
    expect(
      reducer(undefined, {
        type: types.SET_QUANTITY,
        payload: {
          id: 1,
          amount: 11,
        }
      }),
    ).toEqual({
      productIds: [1, 2, 3],
      quantityById: {
        1: 11,
        2: 2,
        3: 1,
      },
    })
  })

  it("should handle CLEAR_BASKET", () => {
    expect(
      reducer(undefined, { type: types.CLEAR_BASKET })
    ).toEqual({
      productIds: [],
      quantityById: {},
    })
  })
})
