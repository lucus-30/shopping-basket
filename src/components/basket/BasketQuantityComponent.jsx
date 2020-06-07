import React, { useCallback, useRef } from "react"
import PropTypes from "prop-types"
import styles from "./basket.module.scss"
import { useDispatch } from "react-redux"
import {
  incrementQuantity,
  decrementQuantity,
  setQuantity,
  removeProduct,
} from "actions/BasketActions"

const posNumericKeyConstraint = evt => {
  const keyCode = evt.keyCode || evt.which
  const allowedKeyCodes = [46, 45, 37, 39, 35, 36, 8, 9, 13].includes(keyCode)
  const isNumeric = /[0-9]+/g.test(evt.key)
  if (allowedKeyCodes || isNumeric) return true
  evt.preventDefault()
}

const BasketQuantity = ({ value, id }) => {
  const dispatch = useDispatch()
  const inputRef = useRef(null)
  const incrementHandler = useCallback(() => {
    dispatch(incrementQuantity(id))
  }, [dispatch, id])

  const decrementHandler = useCallback(() => {
    const action = value === 1 ? removeProduct(id) : decrementQuantity(id)
    dispatch(action)
  }, [dispatch, id, value])

  const blurHandler = useCallback(({target}) => {
    const val = parseInt(target.value)
    if (isNaN(val)) dispatch(setQuantity({ id, amount: 1 }))
  }, [dispatch, id])

  const changeHandler = useCallback(
    ({ target }) => {
      const val =  parseInt(target.value)
      const amount = isNaN(val) ? "" : val
      const action = amount === 0 
        ? removeProduct(id) 
        : setQuantity({ id, amount })
      dispatch(action)
    },
    [dispatch, id],
  )

  return (
    <div className={styles.quantity}>
      <button type="button" onClick={decrementHandler}>
        <i className="las la-minus"></i>
      </button>
      <input
        type="number"
        ref={inputRef}
        value={value}
        onKeyDown={posNumericKeyConstraint}
        onBlur={blurHandler}
        min={0}
        pattern="[0-9]+"
        onChange={changeHandler}
      />
      <button type="button" onClick={incrementHandler}>
        <i className="las la-plus"></i>
      </button>
    </div>
  )
}

BasketQuantity.propTypes = {
  id: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])   
}

export default BasketQuantity 
