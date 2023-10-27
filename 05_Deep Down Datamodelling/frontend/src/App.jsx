import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"


function App() {

  const [isLoading, error, products] = customReactQuery('/api/products') // destructuring of array key values

  if (error) {
    return <div><h1>Something went Wrong</h1></div>
  }
  if (isLoading) {
    return <h1>Data is Loading ...</h1>
  }

  return (
    <>

      <h1>Handle APIs like a pro in Reactjs | Custom react query </h1>
      {products.map((data, index) => {
        return (
          <div className="product-card" key={index}>
            <img
              src={data.thumbnail} // Replace 'images' with your image path
              alt={data.title}
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-title">{data.title}</h2>
              <p className="product-description">{data.description}</p>
              <p className="product-price">
                Price: ${data.price} ({data.discountPercentage}% off)
              </p>
              <p className="product-rating">Rating: {data.rating}</p>
              <p className="product-stock">In Stock: {data.stock} items</p>
              <p className="product-brand">Brand: {data.brand}</p>
              <p className="product-category">Category: {data.category}</p>
            </div>
          </div>
        )
      })}

    </>
  )
}

export default App


const customReactQuery = (url) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    // using IIFI (inmmediately invoked function) technique to use await in axios req , instead of .then()
    // (function definition will be here)(used for calling function)
    (async () => {
      try {
        setLoading(true)
        let response = await axios.get(url)
        console.log(response)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {

        setError(true)

      }
    })()

  }, [])

  return [isLoading, error, products]
}