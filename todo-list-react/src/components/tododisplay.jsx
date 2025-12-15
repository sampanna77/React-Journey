export default function Rendertodo(
    {toremovetask , tasks}
) 
{
    return (
        <>
       <section>
         
        <h2 className="">All The Tasks</h2>
{tasks.length === 0  ? (<h1>No taks inputed</h1>) : (
    tasks.map(c => 
       ( <div key={c.id}>
<div className="flex gap-2 bg-white text-black p-2 font-bold mt-3 ">
    <h3>{c.task}</h3> 
    <button className="bg-red-400 border-2 rounded-b-md gap-3 " 
    onClick={() => (toremovetask(c.id))}>Remove</button>
</div>
        </div>)
    )
)
}
       </section>

    </>
    )
}