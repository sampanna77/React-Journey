import {FaTrash , FaPlus , FaMinus} from "react-icons/fa"

function Cartitems({item  , OnRemove , updatequantity , lowerquantity }) {
  return (
    <div className="bg-gray-300 p-2 rounded-md ">
      <h2>{item.name}</h2>
      <p>Price : ${item.price}</p>
      <div className="flex gap-x-2 ">
        <button  className="mr-2 bg-red-400  p-2 " onClick={() => OnRemove(item.id)}> <FaTrash></FaTrash></button>
        <button onClick={() => updatequantity(item)}><FaPlus></FaPlus></button>
        <span>{item.quantity}</span>
        <button disabled={item.quantity <= 1} onClick={() => lowerquantity(item) }>
          <FaMinus></FaMinus></button>
      </div>
    </div>
  )
}

export default Cartitems  