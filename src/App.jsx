import { useState } from 'react'
import SideBar from './components/SideBar';

function App({text}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar />
    </>
  )
}

export default App
