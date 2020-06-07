import { createSelector } from "reselect"

const productsSelector = state => state.products
const basketSelector = state => state.basket

export const basketItemsSelector = createSelector(
  basketSelector,
  productsSelector,
  (basket, products) => {
    return basket.productIds.map(productId => {
      const productIdx = products.index[productId]
      const quantity = basket.quantityById[productId]
      return {
        ...products.items[productIdx],
        quantity
      }
    })
  }
)

export const basketTotalSelector = createSelector(
  basketItemsSelector,
  items => items.reduce((sum, x) => sum + (x.price * x.quantity), 0)
)