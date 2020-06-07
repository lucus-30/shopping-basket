import React from "react"
import { useSelector } from "react-redux"
import Basket from "components/basket/BasketComponent"
import {
  basketItemsSelector,
  basketTotalSelector,
} from "selectors/BasketSelectors"

export default () => {
  const items = useSelector(basketItemsSelector)
  const total = useSelector(basketTotalSelector)

  return <Basket items={items} total={total} />
}
