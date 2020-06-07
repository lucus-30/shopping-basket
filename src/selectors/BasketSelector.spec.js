import * as selectors from "./BasketSelectors"
import expect from "expect"

const state = {
  products: {
    items: [
      {
        id: 1,
        title: "Woodley Leather Jacket",
        price: 199.0,
      },
      {
        id: 2,
        title: "Salco Chinos",
        price: 199.0,
      },
      {
        id: 3,
        title: "Rook Chelsea Boot",
        price: 199.0,
      },
    ],
    index: {
      1: 0,
      2: 1,
      3: 2,
    },
  },
  basket: {
    productIds: [1, 2, 3],
    quantityById: {
      1: 3,
      2: 2,
      3: 1,
    },
  },
}

describe("Basket selectors", () => {
  it("should return basket items merged with product details", () => {
    expect(selectors.basketItemsSelector(state)).toEqual([
      {
        id: 1,
        title: "Woodley Leather Jacket",
        price: 199.0,
        quantity: 3,
      },
      {
        id: 2,
        title: "Salco Chinos",
        price: 199.0,
        quantity: 2,
      },
      {
        id: 3,
        title: "Rook Chelsea Boot",
        price: 199.0,
        quantity: 1,
      },
    ])
  })

  it("should return sum total of basket items", () => {
    expect(selectors.basketTotalSelector(state)).toEqual(1194)
  })
})
