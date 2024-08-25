export const discountCalculator = ({totalPrice, discount} : {totalPrice: number, discount: number}): number => {
  const discountAmount = totalPrice * (discount / 100)
  const finalPrice = totalPrice - discountAmount;
  return finalPrice
 
}