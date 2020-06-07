import produce from "immer"
import * as types from "constants/BasketActionTypes"

const initialState = {
  itema: [
    {
      id: 1,
      title: "Woodley Leather Jacket",
      price: 199.0
    },
    {
      id: 2,
      title: "Salco Chinos",
      price: 199.0
    },
    {
      id: 3,
      title: "Rook Chelsea Boot",
      price: 199.0
    },
  ],
  index: {
    1: 0,
    2: 1,
    3: 2
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
