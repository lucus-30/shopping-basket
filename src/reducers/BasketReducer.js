import produce from "immer"
import * as types from "constants/BasketActionTypes"

const initialState = {
  productIds: [1, 2, 3],
  quantityById: {
    1: 3,
    2: 2,
    3: 1,
  },
}

export default (state = initialState, { type, payload }) => {
  return produce(state, draft => {
    switch (type) {
      default:
        return draft
    }
  })
}
