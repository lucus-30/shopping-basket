export const currency = n => {
  const config = {
    style: "currency",
    currency: "GBP",
  }
  return new Intl.NumberFormat("en-GB", config).format(n)
}