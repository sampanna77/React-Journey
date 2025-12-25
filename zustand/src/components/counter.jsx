import { Counterstore } from "../store/counter"
function Counter() {
const count = Counterstore((s) => s.count)
const increase = Counterstore((s) => s.increase)
const decrease = Counterstore((s) => s.decrease)
const reset = Counterstore((s) => s.reset)
  return (
    <div>
      <h3>Count is {count}</h3>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter