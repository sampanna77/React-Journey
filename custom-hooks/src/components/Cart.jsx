
import {Cartitems} from "./Cart-items.jsx"

function Cart({cart , onupdatequantity  , onRemove , total}) {
  if(cart.length === 0) {
    return <div> Yout cart is empty</div>
  }
  return (
    <div>
<h2>Shopping Cart</h2>
{cart.map(item => (
  <Cartitems key={item.id} 
  item={item} onupdatequantity = {onupdatequantity} 
  onRemove= {onRemove} >
     </Cartitems>
))}

<div>
  <h3>Total : ${typeof total === "string" ? total : total.toFixed(2)}
  </h3>
  <button> Checkout</button>
</div>
    </div>
  )
}

export default Cart