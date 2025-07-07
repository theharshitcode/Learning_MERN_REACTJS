import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   alert(`Count was changes ${count-1} to ${count}`)
  // }, [count])

  // this is common problem in react after update the variable 'a' then render then value does not changed of a thats why we use 'useRef'
  // let a = 0;
  //   useEffect(() => {
  //    a = a + 1;
  //    console.log(`rendering ${a}`)
  //   }, [count])


  const a = useRef(0)
  useEffect(() => {
    a.current = a.current + 1;
    console.log(`rendering ${a.current}.........`)
  }, [count])
  



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
