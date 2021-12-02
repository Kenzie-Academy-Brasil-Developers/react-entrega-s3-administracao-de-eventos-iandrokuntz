import { createContext, useState } from "react";

export const WeddingContext = createContext([])

export const WeddingProvider = ({ children }) => {

  const [wedding, setWedding] = useState([])

  const addToWedding = (item) => {
    setWedding([...wedding, item])
  }

  const removeFromWedding = (item) => {
    setWedding(wedding.filter((product) => product.id !== item.id))
  }

  return(

    <WeddingContext.Provider value={{ wedding, setWedding, addToWedding, removeFromWedding }}>
      {children}
    </WeddingContext.Provider>
    
  )
}