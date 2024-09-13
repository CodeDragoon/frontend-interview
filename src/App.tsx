import { useState } from "react"
import useThrottle from "./applications/useThrottle"
import usePrevious from "./applications/usePrevious";


function App() {



  const [count, setCount] = useState(0)

  const previousCount = usePrevious(count)




  return <div>

    <button onClick={() => {
      setCount(count => count + 1)
      setCount(count => count + 1)
      setCount(count => count + 1)
    }} >Shoot</button> <br />
    Current Value = {count} <br />
    Previous Value = {previousCount}
  </div>
}

export default App
