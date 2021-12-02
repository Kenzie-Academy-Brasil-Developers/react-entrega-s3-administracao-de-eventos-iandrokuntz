import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/confraternization";
import { ProductContext } from "../../providers/products";

export const AddConfraternization = ({ item }) => {

  const { removeFromProducts } = useContext(ProductContext)
  const { addToConfraternization } = useContext(ConfraternizationContext)

  const handleClick = () => {

    addToConfraternization(item)
    removeFromProducts(item)

  }

  return <div className="Buttons"><button onClick={handleClick}>Add to Confraternization</button></div>
}