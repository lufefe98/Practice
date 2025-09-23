// Create list of products

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 150 },
  { name: "Monitor", price: 300 },
  { name: "Keyboard", price: 100 }
];



// Function

products.sort((a, b) => a.price - b.price)

console.log(products)