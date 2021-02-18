const discount = {
    rate: 0.5,
    reason: 'New Year Sales'
}
  
const products = [
    {
      name: 'Laptop',
      price: 800
    },
    {
      name: 'Keyboard',
      price: 160
    },
    {
      name: 'Mouse',
      price: 70
    }
]
  
const updatedProducts = products.map(product => {
    // complete your code
    return {...product, ...discount, newPrice: product.price * discount.rate};
})
  
console.log(updatedProducts)