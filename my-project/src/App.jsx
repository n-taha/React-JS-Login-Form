import { useState } from 'react'
import './App.css'
import Dynamic from './Components/DynamicStyle'
import Form from './Form/form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form></Form>
    </>
  )
}

export default App
