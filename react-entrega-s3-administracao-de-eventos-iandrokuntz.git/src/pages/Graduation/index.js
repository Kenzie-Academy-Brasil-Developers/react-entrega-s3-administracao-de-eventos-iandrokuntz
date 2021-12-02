import { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import { GraduationContext } from "../../providers/graduation";
import "./style.css"

const Graduation = () => {

  const { graduation } = useContext(GraduationContext)

  return(
      
    <div>
      
      <Link className="Link" to="/"> Go Home</Link>

      <h1>Graduation Event</h1>

      <ul>
        {graduation.map((item) => (
            <li>
                <Product item={item} isRemovable={true}></Product>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Graduation;