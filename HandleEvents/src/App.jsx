import { useState } from 'react'
import Contact from './components/contact'
import './components/contact.css'
import './App.css'

function App() {
  const [form, setform] = useState({ email: " ", phone: " " })
  const handleEvent = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }
  const handleMouseOver = () => {
    alert('your Mouse on the Button')
  }
  const handleBacground = () => {
    document.body.style.backgroundColor = 'balck';
    document.body.style.color = 'white';
  }

  return (
    <>
      <Contact  />
      <div className="btn">
        {/* <button onClick={handleBacground} onMouseOver={handleMouseOver}>click me</button> */}
      </div>
      <div className="btn">
        {/* <button onProgress={alert("in the progressing")}>click me again</button> */}
      </div>
      <div>
        <input type="email" name='email' value={form.email} onChange={handleEvent} />
        <input type="phone" name='phone' value={form.phone} onChange={handleEvent} />
      </div>
    </>
  )
}

export default App
