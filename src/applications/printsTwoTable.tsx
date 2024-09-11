import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {

  const [table, setTable] = useState([]);
  const num = 2;
  useEffect(() => {
    const interval = setInterval(() => {
      setTable((table) => {
        if (table.length === 10) {
          clearInterval(interval);
          return table;
        }
        var last = 0;
        if (table.length > 0) {
          last = table[table.length - 1];
        }
        const temp = [...table];
        temp.push(last + num);
        return [...temp]
      })
    }, 1000)

    return () => {
      clearInterval(interval);
    }

  }, [])


  return <div>

    <div>
      <ul>
        {table.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  </div>
}

export default App
