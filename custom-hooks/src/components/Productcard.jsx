
import {FaShoppingCart} from "react-icons/fa"

function Productcard( {product , onAddTocart}) {
  return (
    <div className="">

<h3>
  {product.name} </h3>
  <p>{product.price}</p>
<button onClick={() => (onAddTocart(product))}> <FaShoppingCart></FaShoppingCart> </button>
    </div>
  )
}

export default Productcard