import React from "react"
import BasketItem from "./BasketItemComponent"
import { currency } from "util/number"
import PropTypes from "prop-types"
import cx from "classnames"
import styles from "./basket.module.scss"

const renderItems = items => {
  return (
    <div className={styles.basketItems}>
      {items.map(props => (
        <BasketItem key={props.id} {...props} />
      ))}
    </div>
  )
}

const infoMessage = msg => {
  return (
    <div className={styles.basketInfoMessage}>
      <i className="las la-info-circle"></i>
      <span>{msg}</span>
    </div>
  )
}

const Basket = ({ items, total }) => {
  const content = items.length > 0
    ? renderItems(items)
    : infoMessage("Your basket is currently empty")

  return (
    <div className={cx(styles.basket, "animated", "zoomIn")}>
      <header className={styles.basketHeader}>
        <h2 className={styles.basketHeading}>Shopping Basket</h2>
      </header>
      <div className={styles.basketBody}>{content}</div>
      <footer className={styles.basketFooter}>
        <button className={styles.basketButton}>
          <i className="las la-arrow-left"></i>
          <span>Continue Shopping</span>
        </button>
        <div className={styles.basketSubtotal}>
          <span>Subtotal:</span>
          <span>{currency(total)}</span>
        </div>
      </footer>
    </div>
  )
}

Basket.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
}

export default Basket