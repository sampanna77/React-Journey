import { createContext , useContext , useState } from "react";

//theme context
const Themecontext = createContext()

// theme provider
 export function Themeprovider({children}){
  const [theme , settheme]  = useState("")

const toggletheme = () => {settheme((theme) => (theme === 'dark' ? "light" : 'dark' ))}

const value = {
  theme , toggletheme , isDark: theme === "dark"
}

return (
  <Themecontext.Provider value={value} >{children}</Themecontext.Provider>
)
}

//custom hook

export function Usetheme(){
  const context = useContext(Themecontext)
if(!context){
  throw new Error("Something is wrong")
}
return context
}


export default function Themetoggler(){
const {isDark ,toggletheme , theme} = Usetheme()

return (
<div className={`p-6 ${isDark ? "bg-gray-500 text-white" : "bg-white text-gray-600"}`}>
<h3>This is switch case</h3>
<button onClick={toggletheme} className={` px-3 ${isDark ? "bg-blue-400 text-white" : "bg-orange-400 text-white"}`}>
Switch to {isDark ? "Light" : "Dark"}
</button>
</div>
)
}