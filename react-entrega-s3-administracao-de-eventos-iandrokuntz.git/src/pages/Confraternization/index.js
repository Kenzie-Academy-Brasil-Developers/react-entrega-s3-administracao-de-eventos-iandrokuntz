import { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import "./style.css"
import { ConfraternizationContext } from "../../providers/confraternization";

const Confraternization = () => {
    
  const { confraternization } = useContext(ConfraternizationContext)

  return (
    <div>
      
        <Link className="Link" to="/"> Go Home</Link>
      <h1>Confraternization Event</h1>
      <ul>
        {confraternization.map((item) => (
            <li>
                <Product item={item} isRemovable={true}></Product>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Confraternization;