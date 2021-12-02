import { createContext, useState } from "react";

export const ProductContext = createContext([])

export const ProductProvider = ({ children }) => {
    
  const [product, setProduct] = useState([])

  const addToProducts = (item) => {
    setProduct([...product, item])
  }

  const removeFromProducts = (item) => {
    setProduct(product.filter((product) => product.id !== item.id))
  }

  return(

    <ProductContext.Provider value={{ product, setProduct, addToProducts, removeFromProducts }}>
      {children}
    </ProductContext.Provider>
  )
}