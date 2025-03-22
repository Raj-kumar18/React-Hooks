import React from 'react'
import { useState } from 'react'

const App = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", stock: 10, isPublished: true },
    { id: 2, name: "Mobile", price: 500, category: "Electronics", stock: 20, isPublished: true },
    { id: 3, name: "Tablet", price: 800, category: "Electronics", stock: 15, isPublished: true },
    { id: 4, name: "Television", price: 1500, category: "Electronics", stock: 5, isPublished: false },
    { id: 5, name: "Shirt", price: 100, category: "Clothing", stock: 50, isPublished: true },
    { id: 6, name: "Jeans", price: 200, category: "Clothing", stock: 30, isPublished: true },
    { id: 7, name: "T-Shirt", price: 50, category: "Clothing", stock: 40, isPublished: false },
    { id: 8, name: "Shorts", price: 70, category: "Clothing", stock: 20, isPublished: true },
    { id: 9, name: "Power Bank", price: 20, category: "Electronics", stock: 100, isPublished: true },
    { id: 10, name: "Earphones", price: 10, category: "Electronics", stock: 200, isPublished: true },

    // New Products
    { id: 11, name: "Smartwatch", price: 300, category: "Electronics", stock: 50, isPublished: true },
    { id: 12, name: "Bluetooth Speaker", price: 150, category: "Electronics", stock: 30, isPublished: true },
    { id: 13, name: "Headphones", price: 350, category: "Electronics", stock: 25, isPublished: true },
    { id: 14, name: "Gaming Mouse", price: 120, category: "Electronics", stock: 60, isPublished: false },
    { id: 15, name: "Mechanical Keyboard", price: 200, category: "Electronics", stock: 40, isPublished: true },
    { id: 16, name: "Wireless Charger", price: 80, category: "Electronics", stock: 70, isPublished: true },
    { id: 17, name: "Smart TV", price: 1800, category: "Electronics", stock: 10, isPublished: false },
    { id: 18, name: "Refrigerator", price: 3000, category: "Home Appliances", stock: 15, isPublished: true },
    { id: 19, name: "Washing Machine", price: 2500, category: "Home Appliances", stock: 20, isPublished: true },
    { id: 20, name: "Microwave Oven", price: 1200, category: "Home Appliances", stock: 18, isPublished: true },

    { id: 21, name: "Electric Kettle", price: 500, category: "Home Appliances", stock: 50, isPublished: true },
    { id: 22, name: "Vacuum Cleaner", price: 2200, category: "Home Appliances", stock: 12, isPublished: false },
    { id: 23, name: "Iron", price: 700, category: "Home Appliances", stock: 40, isPublished: true },
    { id: 24, name: "Fitness Tracker", price: 450, category: "Electronics", stock: 25, isPublished: true },
    { id: 25, name: "Water Purifier", price: 1500, category: "Home Appliances", stock: 30, isPublished: true },
    { id: 26, name: "Jacket", price: 600, category: "Clothing", stock: 15, isPublished: false },
    { id: 27, name: "Sneakers", price: 800, category: "Clothing", stock: 30, isPublished: true },
    { id: 28, name: "Backpack", price: 300, category: "Accessories", stock: 40, isPublished: true },
    { id: 29, name: "Wallet", price: 100, category: "Accessories", stock: 60, isPublished: true },
    { id: 30, name: "Sunglasses", price: 150, category: "Accessories", stock: 35, isPublished: false },

    { id: 31, name: "Hat", price: 80, category: "Accessories", stock: 50, isPublished: true },
    { id: 32, name: "Wristwatch", price: 400, category: "Accessories", stock: 20, isPublished: true },
    { id: 33, name: "Cushion Cover", price: 90, category: "Home Appliances", stock: 80, isPublished: true },
    { id: 34, name: "Curtains", price: 500, category: "Home Appliances", stock: 25, isPublished: true },
    { id: 35, name: "Rug", price: 1000, category: "Home Appliances", stock: 10, isPublished: false },
    { id: 36, name: "Bean Bag", price: 1200, category: "Home Appliances", stock: 15, isPublished: true },
    { id: 37, name: "Smart Glasses", price: 2000, category: "Electronics", stock: 5, isPublished: false },
    { id: 38, name: "Action Camera", price: 3500, category: "Electronics", stock: 8, isPublished: true },
    { id: 39, name: "Gaming Chair", price: 4500, category: "Furniture", stock: 12, isPublished: true },
    { id: 40, name: "Desk Lamp", price: 250, category: "Home Appliances", stock: 30, isPublished: true },

    { id: 41, name: "Monitor Stand", price: 600, category: "Accessories", stock: 20, isPublished: true },
    { id: 42, name: "Portable Fan", price: 350, category: "Home Appliances", stock: 25, isPublished: true },
    { id: 43, name: "Shower Speaker", price: 300, category: "Electronics", stock: 18, isPublished: true },
    { id: 44, name: "Coffee Maker", price: 1800, category: "Home Appliances", stock: 10, isPublished: false },
    { id: 45, name: "Toaster", price: 800, category: "Home Appliances", stock: 20, isPublished: true },
    { id: 46, name: "Bedside Table", price: 1500, category: "Furniture", stock: 15, isPublished: true },
    { id: 47, name: "Desk Organizer", price: 400, category: "Accessories", stock: 40, isPublished: true },
    { id: 48, name: "Hair Dryer", price: 1200, category: "Electronics", stock: 25, isPublished: true },
    { id: 49, name: "USB Hub", price: 500, category: "Electronics", stock: 50, isPublished: true },
    { id: 50, name: "LED Strip Lights", price: 750, category: "Electronics", stock: 30, isPublished: true }
  ];


  const [productList, setProductList] = useState(products)
  const [category, setCategory] = useState("All")
  const [isPublished, setIsPublished] = useState(false)
  const [sortBy, setSortBy] = useState("")
  const [price, setPrice] = useState(1500)
  const [page, setPage] = useState(2)
  return (
    <>
      <h1>Products</h1>
      <div>
        <label htmlFor="">Category</label>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>

        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="price_asc">Price : Low to High</option>
          <option value="price_desc">Price : High to Low</option>
        </select>

        <label htmlFor="isPublished">Published</label>
        <input type="checkbox" onChange={(e) => setIsPublished(e.target.checked)} />

        <label htmlFor="vol">Price {price}</label>
        <input type="range" min="10" max="1500" value={price} onChange={(e) => setPrice(e.target.value)} />

      </div>

      <div className="products-container">
        {
          productList
            .filter((product) => (category === "All" ? product : product.category === category))
            .filter((product) => (isPublished ? product.isPublished : !product.isPublished))
            .sort((a, b) => (sortBy === "price_asc" ? a.price - b.price : b.price - a.price))
            .slice(page * 10 - 10, page * 10)
            .map((product, i) => (
              <div className="product-card" key={product.id}>
                <h3>{product.name} {i}</h3>
                <p>price : {product.price}</p>
                <p>category : {product.category}</p>
                <p>stock : {product.stock}</p>
                <p>Published : {product.isPublished ? "Yes" : "No"}</p>

              </div>
            ))
        }
      </div>

    </>

  )
}

export default App