import axios from "axios";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../providers/products";
import Product from "../Product";

const ProductList = () => {

  const { product, setProduct } = useContext(ProductContext)

  console.log(product)
  useEffect(() =>
      axios.get("https://api.punkapi.com/v2/beers").then((response) => {

          setProduct(response.data)

        }).catch((err) => console.log(err)),[setProduct]
  )

  return (
    <div>
      <ul>
      {product.map((item) => (
        <li>
          <Product item={item} isRemovable={false}></Product>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default ProductList;