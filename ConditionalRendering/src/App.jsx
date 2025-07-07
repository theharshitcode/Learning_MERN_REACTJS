import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import "tailwindcss";

function App() {
  const [count, setCount] = useState(0)
  const [btnshow, setbtnshow] = useState(true)
  const [todos, settodos] = useState([
   {
    title:"hey",
    disc:"i am good"
   },
   {
    tilte:"Hello",
    disc:"i am also good"
   },
   {
    title:"yeah",
    disc:"i am good too"
   }
  ])

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
      {todos.map(todo=>{
        return(
          <div className="m-5 border">
            <div className='todo'>{todo.title}</div>
            <div className='todo'>{todo.disc}</div>
          </div>
        )
      })}
      <div className="card">
        <div>
          {btnshow? <button className='m-4 border-2 p-10 text-amber-400'>it is true</button> : <button>it is false</button>}
        </div>
        {/* <div> {btnshow && <button>click me and show</button>}</div> */}
       
        <button onClick={() => setCount((count) => count + 1) ||  
          setbtnshow(!btnshow)
        }>
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
