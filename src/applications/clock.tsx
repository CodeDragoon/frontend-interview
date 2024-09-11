import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {
  // timer
  // start pause reset
  const [time, setTime] = useState(0);
  const [clockState, setClockState] = useState("pause")

  const intervalRef = useRef(0);

  useEffect(() => {

    if (clockState === "start") {
      intervalRef.current = setInterval(() => {
        setTime((time) => {
          return time + 1
        })
      }, 1000)
    }
    if (clockState === "reset" || clockState === "pause") {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (clockState === "reset") {
        setTime(0)
      }
      setClockState("pause");

    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

  }, [clockState])


  const totalRotateDegrees = 6 * time + 90;




  return (
    <>
      <div>
        My clock {time}
        <div>



          <button onClick={() => {
            setClockState("start")
          }} >Start</button>
          <button onClick={() => {
            setClockState("reset")
          }}>Reset</button>
          <button onClick={() => {
            setClockState("pause")
          }}>Pause</button>
        </div>
        <div className='clock'>

          <div className='minute-hand' style={{
            transform: `rotate(${totalRotateDegrees}deg)`
          }} >
            <div className='non-visible-hand'>

            </div>
            <div className='visible-hand'>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
