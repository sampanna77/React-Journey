import Todoinput from "./components/todoinput.jsx"
import { useState } from "react"
import Rendertodo from "./components/tododisplay.jsx"
export default function App() {
  const [alltask , setalltask] = useState([])
  const addtask = (tasks) => (
    setalltask([...alltask , {...tasks , id: Date.now() , completed:false}])
  )

  const removetask = ( id ) => ( 
    setalltask(
  alltask.filter(t => t.id !== id )
    )
  )
  return (
    <>
    <h1 className=" flex  items-center justify-center text-2xl ">
      To-Do-App</h1>
  <main className=" flex gap-6 mt-20 items-center justify-center ">
      <Todoinput addtotask = {addtask}/>
    <Rendertodo tasks = {alltask}
    toremovetask = {removetask}
    />
  </main>
    {console.log(alltask)}
    </>
  )
}