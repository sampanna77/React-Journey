import { useRef , forwardRef } from "react"

//input component that accept a ref prop

const CustomInput = forwardRef(
  ( {label , placeholder , className} , ref) => {
    return (
      
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input  ref={ref}
      placeholder={placeholder}
      type="text" className={`w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} />
    </div>
    )
  }
)

CustomInput.displayName = "CustomInput"

function Refprops() {

  const inputref = useRef(null)
  const secondinput = useRef(null)

  const focusInput = () => {
    inputref.current?.focus()
  }

   const getinputvalue = () => {
    if(inputref.current) {
    alert(`Input value ${inputref.current.value}`)
    }
  }

   const clearinput = () => {
    if(inputref.current) {
   inputref.current.value = ""
  inputref.current.focus()
    }
  }

    const focussecondinput = () => {
    secondinput.current?.focus()
  }
  return (
   <>
 <section className="p-8 bg-white rounded-xl shadow-lg text-black">
  <h2>Ref Props</h2>
  <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, architecto.</p>
    <div>
      <CustomInput label="First Value" placeholder="Enter your name" 
       className="text-black"
        ref={inputref}>
    </CustomInput>

     <CustomInput label="Second Input" placeholder="Enter your age" 
       className="text-black"
        ref={secondinput}>
    </CustomInput>

    <div className="flex flex-wrap gap-3 mt-4">
<button  className="bg-blue-400 px-2 rounded-md"
onClick={focusInput}> Focus First Input</button>
<button onClick={focussecondinput} className="bg-green-400 px-2 rounded-md"> Focus Second Value</button>
<button onClick={getinputvalue} className="bg-orange-400 px-2 rounded-md">Get value</button>
<button onClick={clearinput} className="bg-orange-400 px-2 rounded-md">Clear Input</button>
    </div>
    </div>
   

   <div className="mt-3 bg-amber-100 border border-l-4  border-amber-300 p-3 rounded-xl ">
    <h2>When to use refs</h2>
    <ul className="list-disc flex flex-col p-3">
      <li>Managing focus , text selection or media playback</li>
      <li>Triggering imperative animations </li>
    </ul>
   </div>
   </section></>
  )
}

export default Refprops