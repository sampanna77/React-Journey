import { useEffect, useState } from "react";

 export default function UseCart(){
     const [cart , setcart] = useState(
        () => {
         try {
            let storedcart = localStorage.getItem("cart")
            if(storedcart) {
                return JSON.parse(storedcart)
            }

            return []
         } catch (error) {
            return []
         }
        }
     )

useEffect(() => {
 localStorage.setItem("cart" , JSON.stringify(cart))
} , [cart])

const Addtocart = (product) => {
    setcart(
       [...cart ,  {...product , quantity : 1} ]
    )
}

const Removecart = (productid) =>  {
    setcart(
        cart.filter(item => item.id !== productid )
    )
}

const total = () => {
     return cart.reduce((acc, item) => acc + item.price * item.quantity  , 0)
}

const updatequantity = (item) => {
setcart((existcart) => existcart.map((i) => item.id === i.id ? {...i , quantity : i.quantity + 1}: i))
}

const degradequantity = (item) => {
setcart((existcart) => existcart.map((i) => item.id === i.id ? {...i , quantity : i.quantity - 1}: i))
}


return {Removecart , Addtocart , total , cart , updatequantity , degradequantity}
}