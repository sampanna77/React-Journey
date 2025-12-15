export default function Render({queue , onupdate , onremove} )  {

return (
    <>
  <section className="flex flex-col bg-gray-700 items-center p-4 text-white  ">
    <h1>Current Queue</h1>
    {
        queue.length === 0 ? (<p> No current data</p>)
         : (  
            <div className="flex flex-col gap-4 rounded w-full ">
            {queue.map((c) => (
                <div key={c.id}> 
                <div className="p-2 bg-white text-black gap-4 ">
                    <h3>{c.name}</h3>
                    <p>{c.service}</p>
                    <span>{c.status}</span>
                    </div>
                    <div>
                        {c.status === "waiting" && (
                            <button className="bg-green-500 border-2 p-1  text-white " 
                            onClick={() => onupdate(c.id , "serving")}>Serve </button>
                        )} 

                          {c.status === "Serving " && (
                            <button className="bg-green-500 border-2 p-1  text-white " 
                            onClick={() => onupdate(c.id , "completed")}>Serve </button>
                        )} 

<button className="bg-red-500 p-1 " onClick={ () => onremove(c.id)}> Remove </button>
                    </div>
                </div>
            ) )}
            </div>
        )
    }
  </section>
    </>
)
}