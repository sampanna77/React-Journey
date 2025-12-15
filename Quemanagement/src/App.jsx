import { useState } from "react"
import Queform from "./components/Queform"
import Render from "./components/display"
export default function App(){
const [queue , setqueue ] = useState([]);
const addtoqueue = (customer) => {
    setqueue([...queue , {...customer , id:Date.now() , status:"waiting"}])
}

const updatequeue = (id , newstatus) => {
   setqueue(queue.map(c => c.id === id ? {...c , status: newstatus } : c  ))
}

const removequeue = (id) => {
    setqueue(queue.filter(c => c.id !== id))
}
    return(
        <>
<header>
    <h1 className="flex justify-center text-blue-500 text-3xl p-2 bg-amber-50">Queue Managemet System</h1>
</header>

<main className="mt-10 flex items-center justify-center gap-10">
<Queform onadd={addtoqueue}/>
<Render queue = {queue}
 onupdate = {updatequeue}
  onremove ={removequeue}/>

</main>
        </>
    )
}