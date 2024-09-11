import { useEffect } from "react"
import InfiniteScrollWithApi from "./InfiniteScrollWithApi"





function App() {


  useEffect(() => {
    console.log('inside useEffect')
}, [])


  return <div>
    <InfiniteScrollWithApi />
  </div>
}

export default App
