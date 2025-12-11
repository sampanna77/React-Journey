import { useState } from "react";
import "./App.css";


export default function App() {
  const [vari , fun] = useState(0)
  const [newin , newfun] = useState(0)
return (
  <>
<h1>Counter App</h1>
<h2>Counter is {vari}</h2>
<div>
  <button onClick={() => fun(vari+1)}>Increase</button>
  <button onClick={() => fun(Math.max(vari -1 , 0))}>Decrease</button>
  <button onClick={() => fun(0)}>Reset</button>
</div>

<input type="text" value={newin} onChange={(e) => {newfun(Number(e.target.value))}} />
<button onClick={() => {
  fun(newin)
  newfun(0)
}}>Set to {newin} </button>
  </>
)
}