import { useContext } from "react";
import { GraduationContext } from "../../providers/graduation";
import { ProductContext } from "../../providers/products";

export const AddGraduation = ({ item }) => {

  const { removeFromProducts } = useContext(ProductContext)
  const { addToGraduation } = useContext(GraduationContext)

  const handleClick = () => {

    addToGraduation(item)
    removeFromProducts(item)

  }

  return <div className="Buttons"><button onClick={handleClick}>Add to Gratuation</button></div>
}