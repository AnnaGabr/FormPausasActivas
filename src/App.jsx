import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState('test')

  const obtenerFechaHora = () => {
    const date = new Date()
    setCount(c => date)
    console.log(count)
    console.log(count.getFullYear())
    console.log(count.getMonth() + 1)
    console.log(count.getDay())
  }

  return (
    <>
      <button onClick={obtenerFechaHora}>Pausa Activa</button>
      <p>{count.getFullYear()} / {count.getMonth() + 1} / {count.getDay()}</p>
      <p>{count.getHours()} : {count.getMinutes()}</p>
    </>
  )
}

export default App

{/*Forms de pausas activas:*/}
{/*https://docs.google.com/forms/u/2/d/e/1FAIpQLSc3Qjj0W0An3_ia6nJnCq9F3hfhge5hsp6TUL7gc7KCHEFWAw/formResponse*/}

{/*Forms de prueba de pausas activas: */}
{/*https://docs.google.com/forms/u/0/d/e/1FAIpQLScmHoY7EOf5ZgGtY8yvUyTlRWtSXLNtkvtsz7huF1xjHVOyTQ/formResponse*/}