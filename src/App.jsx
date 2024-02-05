import { useState } from 'react'
import Saludo from './Saludo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Saludo particularizacion='My Friend'></Saludo>
    </>
  )
}

export default App
