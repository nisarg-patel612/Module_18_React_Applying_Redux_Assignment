import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CRUD_UI from './Task_3_CRUD_Application/CRUD_Ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>CRUD Application </h1>
        <CRUD_UI />
    </>
  )
}

export default App
