import Basicprops from "./components/basic-props.jsx"
import Themetoggler from "./components/themetoggler.jsx"
import Refprops from "./components/refprops.jsx"
import Complexprops from "./components/Complexprops.jsx"
import Childrenprops from "./components/children.jsx"
import { useState } from "react"
import { Usetheme , Themeprovider } from "./components/themetoggler.jsx"

function Navigation() {
    const sections = [
        { id: "basic", label: "Basic-props", icon: "📦" },
        { id: "ref", label: "Ref-props", icon: "🔗" },
        { id: "children", label: "Children-props", icon: "👶" },
        { id: "complex", label: "Complex-props", icon: "🧩" },
        { id: "theme", label: "Theme-props", icon: "🎨" }
    ]

    return (
        <nav className={"sticky top-0 z-50 shadow-md p-3"}>
            <div>
                <div className={"flex justify-center  items-center"}>
                    {sections.map((s) => (<button className={" flex justify-between items-center px-4 py-2 rounded-lg font-medium bg-violet-700 text-white mr-4 hover:bg-blue-800 "}
                        key={s.id}><span>{s.icon}</span> {s.label} </button>))}
                </div>
            </div>
        </nav>
    )
}

function Appcontent() {
      //  const isdark = true
      
      const { isDark} = Usetheme()
      
    return (
        <>
            <div className={`min-h-screen bg-gray-800 ${isDark ? "bg-gray-900" : "bg-purple-400"}`}>
              
                <Navigation />

                <div className="mx-auto container px-4 py-8  ">
                    <header className="flex justify-center items-center flex-col mb-5 ">
                        <h1 className= {` p-2 rounded-2xl text-2xl ${isDark ? "bg-white text-gray-800" : "bg-gray-400 text-white "}`}>React props explained</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </header>
                    <div className="space-y-8 ">
                        <div id="basic" className="scroll-mt-200">
                            <Basicprops />
                        </div>
                        <div id="ref" className="scroll-mt-200">
                            <Childrenprops />
                        </div>
                        
                        <div id="complex" className="scroll-mt-200">
                            <Complexprops />
                        </div>
                        <div id="children" className="scroll-mt-200">
                            <Refprops></Refprops>
                        </div>
                        <div id="theme" className="scroll-mt-200">
                            <Themetoggler> </Themetoggler>
                        </div>

                    </div>
                    <footer
                        className={`mt-12 text-center pb-8 transition-color transition-colors ${isDark ? "text-gray-400" : "text-gray-600"} `}
                    >                        <p>Made with 💖 by sampanna . All rights reserved</p>
                    </footer>

                </div>

            </div>
        </>
    )
}

export default function App() {
    return (
    <> 
      <Themeprovider>
        <Appcontent></Appcontent>
      </Themeprovider>
    </>)

}