import React, { useCallback } from "react"
import { removeProduct } from "actions/BasketActions"
import PropTypes from "prop-types"
import BasketQuantity from "./BasketQuantityComponent"
import { useDispatch } from "react-redux"
import { currency } from "util/number"
import styles from "./basket.module.scss"

const BasketItem = ({ id, title, price, quantity }) => {
  const dispatch = useDispatch()
  const removeHandler = useCallback(() => {
    dispatch(removeProduct(id))
  }, [dispatch, id])

  return (
    <div className={styles.basketItem}>
      <div className={styles.basketItemThumb}>
        <img alt={title} src={`/assets/images/products/${id}.jpg`} />
      </div>
      <div className={styles.basketItemDescription}>
        <h3 className={styles.basketItemTitle}>{title}</h3>
        <small className={styles.basketItemCode}>#442341</small>
      </div>
      <div className={styles.basketItemQuantity}>
        <BasketQuantity value={quantity} id={id} />
      </div>
      <div className={styles.basketItemPrice}>{currency(price)}</div>
      <button
        type="button"
        className={styles.basketItemButton}
        onClick={removeHandler}
      >
        <i className="las la-times"></i>
      </button>
    </div>
  )
}

BasketItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default BasketItem
