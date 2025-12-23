import {FaTrash , FaMinus , FaPlus} from "react-icons/fa"

function Cartitems({item , onUpdataequantity , onRemove}) {
  return (
    <div>
      <div className="items-details">
        <h4>{item.name}</h4>
        <p>{item.price}</p>+
        <div>
          <button onClick={() => onUpdataequantity(item.id , item.quantity -1)}>
            <FaMinus/> 
          </button>

  <span> {item.quantity}</span>

          <button onClick={() => onUpdataequantity(item.id , item.quantity  + 1)}>
            <FaMinus/>
          </button>
        </div>


      </div>
      <button onClick={() => onRemove(item.id)}>
        <FaTrash></FaTrash>
      </button>
    </div>
  )
}

export default Cartitems