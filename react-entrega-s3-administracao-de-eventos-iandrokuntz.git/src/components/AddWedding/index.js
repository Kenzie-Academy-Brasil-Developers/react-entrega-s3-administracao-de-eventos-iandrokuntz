import { useContext } from "react";
import { WeddingContext } from "../../providers/wedding";
import { ProductContext } from "../../providers/products";

export const AddWedding = ({ item }) => {

  const { removeFromProducts } = useContext(ProductContext)
  const { addToWedding } = useContext(WeddingContext)

  const handleClick = () => {

    addToWedding(item)
    removeFromProducts(item)

  }
            
  return <div className="Buttons"><button onClick={handleClick}>Add to Wedding</button></div>
}