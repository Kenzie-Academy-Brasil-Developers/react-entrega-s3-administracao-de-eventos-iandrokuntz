import { useContext } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import { WeddingContext } from "../../providers/wedding";
import "./style.css"

const Wedding = () => {

  const { wedding } = useContext(WeddingContext)

  return (
    <div>
        <Link className="Link" to="/">Go Home</Link>
        <h1>Wedding Event</h1>
        <ul>
        {wedding.map((item) => (
            <li>
                <Product item={item} isRemovable={true}></Product>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Wedding;