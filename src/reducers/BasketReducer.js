import produce from "immer"
import * as types from "constants/BasketActionTypes"
import { reject, inc, dec, equals } from "ramda"

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
      case types.REMOVE_PRODUCT:
        draft.productIds = reject(equals(payload.id), draft.productIds)
        delete draft.quantityById[payload.id]
        break
      case types.INCREMENT_QUANTITY:
        draft.quantityById[payload.id] = inc(draft.quantityById[payload.id])
        break
      case types.DECREMENT_QUANTITY:
        draft.quantityById[payload.id] = dec(draft.quantityById[payload.id])
        break 
      default:
        return draft
    }
  })
}
