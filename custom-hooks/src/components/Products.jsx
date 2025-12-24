import {FaCartPlus } from "react-icons/fa"
import { products } from "../data/product"

function Products({OnnAddtocart}) {
  return (
    <div>
{products.length === 0 ? <h1> Your Cart is empty</h1> : 
<div className="bg-amber-50 space-y-8 text-black grid justify-center items-center w-80 p-4 ">
    {products.map(item => 
        <div key={item.id} className="bg-gray-300 p-2  ">
            <h2>{item.name}</h2>
            <p> Price : ${item.price}</p>
            <button className="bg-blue-500 p-1 flex items-center justify-between rounded-md "  onClick={() => OnnAddtocart(item)}> <FaCartPlus></FaCartPlus> Add to Cart</button>
        </div>
    )}
</div>
}
    </div>
  )
}

export default Products