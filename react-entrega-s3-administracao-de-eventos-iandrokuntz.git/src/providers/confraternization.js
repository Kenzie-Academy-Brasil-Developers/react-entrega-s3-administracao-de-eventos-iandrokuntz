import { createContext, useState } from "react";

export const ConfraternizationContext = createContext([])

export const ConfraternizationProvider = ({ children }) => {
    
  const [confraternization, setConfraternization] = useState([])

  const addToConfraternization = (item) => {
    setConfraternization([...confraternization, item])
  }

  const removeFromConfraternization = (item) => {
    setConfraternization(confraternization.filter((product) => product.id !== item.id))
  }

  return(

    <ConfraternizationContext.Provider value={{ confraternization, setConfraternization, addToConfraternization, removeFromConfraternization}}>
      {children}
    </ConfraternizationContext.Provider>
  )
}