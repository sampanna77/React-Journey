import Cartitems from "./Cartitems"

function CartDisplay({cart , OnRemove , OnUpdate , total , updatequantity , lowerquantity}) {
  return (
    <div className="">
{
  cart.length === 0 ? <h1>Your Cart is Empty</h1> :
  <section className="bg-amber-50 space-y-6 text-black p-6">
    {cart.map(item => 
      <Cartitems key={item.id}  item={item} OnRemove={OnRemove}  updatequantity = {updatequantity}
        lowerquantity= {lowerquantity}  > </Cartitems>
    )}

    <p>Total : ${total().toFixed(2)}</p>
  </section>
}

    </div>
  ) 
}

export default CartDisplay