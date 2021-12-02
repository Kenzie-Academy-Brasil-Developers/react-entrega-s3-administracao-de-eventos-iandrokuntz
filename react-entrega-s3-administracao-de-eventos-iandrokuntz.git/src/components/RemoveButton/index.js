import { useContext } from "react";
import { WeddingContext } from "../../providers/wedding";
import { GraduationContext } from "../../providers/graduation";
import { ConfraternizationContext } from "../../providers/confraternization";
import "./style.css"

export const RemoveButton = ({ item }) => {

  const { removeFromWedding } = useContext(WeddingContext);
  const { removeFromConfraternization } = useContext(ConfraternizationContext);
  const { removeFromGraduation } = useContext(GraduationContext);

  const handleClick = () => {

    removeFromWedding(item)
    removeFromConfraternization(item)
    removeFromGraduation(item)
    
  }

  return <div className="Buttons"><button onClick={handleClick}>Remove</button></div>
}