import reducer from "./ProductReducer"
import expect from "expect"

describe("Product reducer", () => {
  it("should return the intial state", () => {
    expect(reducer(undefined, {})).toEqual({
      items: [
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
    })
  })
})