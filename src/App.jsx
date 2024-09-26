import React from 'react'
import Background from './components/Background'
import Forground from './components/ForGround'

const App = () => {
  return (
    <div className='w-full h-screen relative bg-zinc-800'>
      <Background />
      <Forground />
    </div>
  )
}

export default App