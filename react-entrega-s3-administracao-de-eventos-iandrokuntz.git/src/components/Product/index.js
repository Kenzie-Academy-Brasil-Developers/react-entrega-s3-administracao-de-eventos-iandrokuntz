
import { AddConfraternization } from "../AddConfraternization";
import { AddGraduation } from "../AddGraduation";
import { AddWedding } from "../AddWedding";
import { RemoveButton } from "../RemoveButton";

const Product = ({

  item, item: {name, description, image_url, id, first_brewed, volume: { value }}, isRemovable,}) => {
  
    return (

    <div key={id}>
        
      <h3 className="nameProduct">{name}</h3>

      <img src={image_url} alt={name}></img>

      <div className="ItensDescription">

        <p><strong>Description:</strong> {description.substr(0, 80)}...</p>
        <p><strong>Start of Manufacturing:</strong> {first_brewed}</p>
        <p><strong>Liters:</strong> {value}</p>

      </div>

      {!isRemovable ? (
        <>
          <AddWedding item={item}/>
          <AddConfraternization item={item}/>
          <AddGraduation item={item}/>
        </>
      ) : (
        <>
          <RemoveButton item={item}/>
        </>
      )}
    </div>
  )
}
export default Product;