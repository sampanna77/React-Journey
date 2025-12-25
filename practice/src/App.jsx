import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";




function Controller(){
  const [menu , setmenu] = useState("home")

  return (
    <div>
      <nav>
        <button onClick={() => setmenu("home")}>Home</button>
        <button onClick={() => setmenu("contact")}> Contact </button>
        <button onClick={() => setmenu("about")}>About Us</button>
      </nav>
        { menu === "home" ? (
          <Home></Home>
        ): menu === "about" ? <About></About> : <Contact></Contact>
        }
    </div> 
  )


}




function App() {
  return (
    <Controller></Controller>
  )
}

export default App