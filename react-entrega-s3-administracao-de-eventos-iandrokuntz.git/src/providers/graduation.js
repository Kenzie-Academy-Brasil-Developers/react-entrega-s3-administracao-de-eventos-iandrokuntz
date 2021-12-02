import { createContext, useState } from "react";

export const GraduationContext = createContext([])

export const GraduationProvider = ({ children }) => {

  const [graduation, setGraduation] = useState([])

  const addToGraduation = (item) => {
    setGraduation([...graduation, item])
  }

  const removeFromGraduation = (item) => {
    setGraduation(graduation.filter((product) => product.id !== item.id))
  }

  return(

    <GraduationContext.Provider value={{ graduation, setGraduation, addToGraduation, removeFromGraduation }}>
      {children}
    </GraduationContext.Provider>
  )
}