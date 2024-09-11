import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => {
        if (counter >= 5) {
          clearInterval(interval)
          return counter;
        }

        return counter + 1
      });
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])


  return <div>

    <div>
      {counter}
      <button onClick={() => {
        setCounter(counter => counter + 1);
        setCounter(counter => counter + 1)
      }}>Click</button>
    </div>
  </div>
}

export default App
