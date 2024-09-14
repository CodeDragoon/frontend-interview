import { useState } from "react"
import useThrottle from "./applications/useThrottle"
import usePrevious from "./applications/usePrevious";
import Contact from "./testing/Contact";


function App() {
  return <div>

    <Contact iName="Rishabh" iAge={28} />
  </div>
}

export default App
