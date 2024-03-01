import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import IphoneModel from './components/spline'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen'>
        <IphoneModel/>
      </div>
    </>
  )
}

export default App
