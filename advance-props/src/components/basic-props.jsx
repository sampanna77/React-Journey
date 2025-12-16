import  { useState } from 'react'
function Button({text , color , size ,onclick , disabled} ){
  return (
    <>
    <button onClick={onclick}
     disabled = {disabled}
     className={`px-6 py-2 round-md font-medium transition-all duration-300 rounded-xl 
       ${size === "small" ? "text-sm px-4 py-1 " : ""}
       ${size === "large" ? "text-lg px-6 py-3 " : ""}
       ${color === "primary" ? "bg-blue-500 hover:bg-blue-700 text-white" : ""}
       ${color === "secondary" ? "bg-orange-500 hover:bg-orange-700 text-white" : ""}
       ${color === "tertiary" ? "bg-gray-500 hover:bg-gray-700 text-white" : ""}
       ${color === "danger" ? "bg-red-500 hover:bg-red-700 text-white" : ""}
       ${color === "success" ? "bg-green-500 hover:bg-green-700 text-white" : ""}
       ${disabled ? "opacity-50 cursor-not-allowed" : ""}
       ` }
     >
      {text}  </button>
    </>
  )
}

function Basicprops() {
const [click ,clickcount] = useState(0)
const countclick = () => (clickcount(click + 1))
  return (
  <>
  <section className='p-8 bg-white rounded-xl shadow-2xl text-black'>
  <h2 className='text-2xl font-bold'>Basic Props</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates debitis error deleniti pariatur est.</p>
  <div className='space-y-2'>
<h3>Different colors</h3>
<div className='flex flex-wrap gap-3'>
<Button text="Contact" color="primary" size="small" onclick={countclick}> </Button>
<Button text="Subscribe" color="secondary" size="small" disabled ={true} onclick={countclick}> </Button>
<Button text="Test" color="tertiary" size="small"   onclick={countclick}> </Button>
<Button text="Danger" color="danger" size="small" onclick={countclick} > </Button>
<Button text="Success" color="success" size="small"  onclick={countclick}> </Button>
</div>
  </div>
  <div className='bg-blue-200 text-black p-1 mt-3 '>
    <h3>Click count: {click}</h3>
  </div>
</section>

  </>

  )

}

export default Basicprops