import { useState } from "react"

export default  function Todoinput({addtotask}){
    const [task , settask] = useState("")
    const handlesubmit = (e) => {
        e.preventDefault()
      if(!task) return 
      addtotask({task});
      settask("")
    }
return (
    <>
  <section className="flex items-center justify-center flex-col gap-3  ">

      <h2 className="">Tasks Input</h2>
      
        <form onSubmit={handlesubmit} 
        className="flex flex-col items-center justify-center gap-4 
        ">
            <input type="text" className="border-2 border-white rounded-md "
             placeholder="Enter A Task To Do" value={task}
              onChange={(e) => settask(e.target.value)}/>
           <button type="submit" className="bg-blue-400 border-2 rounded-b-md gap-3">Add Task</button>
        </form>
   
  </section>
    </>
)

}