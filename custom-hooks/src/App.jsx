
import Products from "./components/Products.jsx"
import CartDisplay from "./components/CartDisplay.jsx"
import UseCart from "./hooks/usecart"

function App() {
  const  {Removecart , Addtocart , cart , total , updatequantity , degradequantity} = UseCart()
   return (
    <div className="bg-gray-700 text-white min-h-screen p-10">
      <h1 className="text-center text-3xl  ">Shopping Cart</h1>
     <main className="flex justify-around items-center mt-5">
      <section className="">
         <Products OnnAddtocart = {Addtocart}
          
         ></Products>
      </section>
      <section>
        <CartDisplay cart={cart} OnRemove={Removecart} total={total}  updatequantity= {updatequantity} lowerquantity = {degradequantity}></CartDisplay>
      </section>
     </main>
    </div>
  )
}

export default App