import { useState } from "react";
import {FaUserPlus} from "react-icons/fa"
export default function Queform({onadd}){

    const [name , setname] = useState("")
    const [service , setservice] = useState("")

    const handlesubmit = (e) => { 
        e.preventDefault()  
        if(!name || !service ) return 
        onadd({name , service})
        setname("")
        setservice("")
     }


    return (
        <>
        <section className="flex flex-col bg-gray-700 items-center p-4 ">
           <h1 className="text-2xl text-blue-500 font-bold bg-amber-50 rounded p-1  ">Add to Queue</h1> 
           <form action="submit" className="flex flex-col " onSubmit={handlesubmit}>

<input type="text" className="border-white bg-gray-700 p-1 m-2 rounded   border-2 "
 placeholder="Enter Customer name "  value={name} onChange={(e) => {setname(e.target.value)}}/>
<select value={service} onChange={(e) => setservice(e.target.value)}
 className="text-white bg-gray-600  border-white border-2 rounded p-1 ">
    <option value=""> Select Service</option>
    <option value="consultation">Consultation</option>
    <option value="payment">Payment</option>
    <option value="support">Support</option>
</select>
<button className="border-white border-2 mt-4 bg-blue-500 rounded flex justify-center gap-2 items-center " 
type="submit"> <FaUserPlus/> Add to Que</button>
           </form>
        </section>
        </>
    )
}